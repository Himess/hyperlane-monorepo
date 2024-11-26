import {
  DefaultFallbackRoutingIsm__factory,
  InterchainAccountIsm__factory,
} from '@hyperlane-xyz/core';
import { Address, WithAddress, assert } from '@hyperlane-xyz/utils';

import { ChainName } from '../../types.js';
import { DerivedIsmConfig, EvmIsmReader } from '../EvmIsmReader.js';
import { IsmType, RoutingIsmConfig } from '../types.js';

import {
  BaseMetadataBuilder,
  MetadataBuilder,
  MetadataContext,
  StructuredMetadata,
} from './builder.js';

export type RoutingMetadata<T> = {
  type: IsmType.ROUTING;
  origin: ChainName;
  metadata: T;
};

export class RoutingMetadataBuilder implements MetadataBuilder {
  constructor(protected baseMetadataBuilder: BaseMetadataBuilder) {}

  public async build(
    context: MetadataContext<WithAddress<RoutingIsmConfig>>,
    maxDepth = 10,
  ): Promise<string> {
    const originChain = this.baseMetadataBuilder.multiProvider.getChainName(
      context.message.parsed.origin,
    );
    const originContext = {
      ...context,
      ism: context.ism.domains[originChain] as DerivedIsmConfig,
    };
    return this.baseMetadataBuilder.build(originContext, maxDepth - 1);
  }

  static decode(
    metadata: string,
    context: MetadataContext<WithAddress<RoutingIsmConfig>>,
  ): RoutingMetadata<StructuredMetadata | string> {
    // TODO: this is a naive implementation, we should support domain ID keys
    assert(context.message.parsed.originChain, 'originChain is required');
    const ism = context.ism.domains[context.message.parsed.originChain];
    const originMetadata =
      typeof ism === 'string'
        ? metadata
        : BaseMetadataBuilder.decode(metadata, {
            ...context,
            ism: ism as DerivedIsmConfig,
          });

    return {
      type: IsmType.ROUTING,
      origin: context.message.parsed.originChain,
      metadata: originMetadata,
    };
  }
}

export class DefaultFallbackRoutingMetadataBuilder extends RoutingMetadataBuilder {
  public async build(
    context: MetadataContext<WithAddress<RoutingIsmConfig>>,
    maxDepth = 10,
  ): Promise<string> {
    const originChain = this.baseMetadataBuilder.multiProvider.getChainName(
      context.message.parsed.origin,
    );

    const isRouted = !!context.ism.domains[originChain];
    if (isRouted) {
      return super.build(context, maxDepth);
    }

    if (
      context.ism.type !== IsmType.FALLBACK_ROUTING &&
      context.ism.type !== IsmType.ICA_FALLBACK_ROUTING
    ) {
      throw new Error(
        `Origin domain ${originChain} is not enrolled in DomainRoutingIsm`,
      );
    }

    const destinationProvider =
      this.baseMetadataBuilder.multiProvider.getProvider(
        context.message.parsed.destination,
      );

    let ismAddress: Address;
    if (context.ism.type === IsmType.ICA_FALLBACK_ROUTING) {
      const icaFallbackRoutingIsm = InterchainAccountIsm__factory.connect(
        context.ism.address,
        destinationProvider,
      );

      ismAddress = await icaFallbackRoutingIsm.route(context.message.message);
    } else {
      const fallbackIsm = DefaultFallbackRoutingIsm__factory.connect(
        context.ism.address,
        destinationProvider,
      );
      ismAddress = await fallbackIsm.module(context.message.parsed.origin);
    }

    const ismReader = new EvmIsmReader(
      this.baseMetadataBuilder.multiProvider,
      context.message.parsed.destination,
    );
    const defaultIsmConfig = await ismReader.deriveIsmConfig(ismAddress);

    const originContext = {
      ...context,
      ism: defaultIsmConfig,
    };
    return this.baseMetadataBuilder.build(originContext, maxDepth - 1);
  }
}
