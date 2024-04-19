import { BigNumber, ethers } from 'ethers';

import {
  ChainMap,
  ChainName,
  TOKEN_EXCHANGE_RATE_EXPONENT,
} from '@hyperlane-xyz/sdk';
import { objMap } from '@hyperlane-xyz/utils';

import {
  AllStorageGasOracleConfigs,
  GasPriceConfig,
  getAllStorageGasOracleConfigs,
  getTokenExchangeRateFromValues,
} from '../../../src/config/gas-oracle.js';

import { supportedChainNames } from './chains';
import rawGasPrices from './gasPrices.json';
import rawTokenPrices from './tokenPrices.json';

// const gasPrices: ChainMap<GasPriceConfig> = objMap(rawGasPrices, (_, gasPrice) =>
//   // ethers.utils.parseUnits(gasPrice, 'gwei'),
//   gasPrice
// );

const tokenUsdPrices: ChainMap<BigNumber> = objMap(
  rawTokenPrices,
  (_, tokenUsdPrice) =>
    ethers.utils.parseUnits(tokenUsdPrice, TOKEN_EXCHANGE_RATE_EXPONENT),
);

// Gets the exchange rate of the remote quoted in local tokens
function getTokenExchangeRate(local: ChainName, remote: ChainName): BigNumber {
  const localValue = tokenUsdPrices[local];
  const remoteValue = tokenUsdPrices[remote];

  return getTokenExchangeRateFromValues(local, localValue, remote, remoteValue);
}

export const storageGasOracleConfig: AllStorageGasOracleConfigs =
  getAllStorageGasOracleConfigs(
    supportedChainNames,
    rawGasPrices,
    getTokenExchangeRate,
  );
