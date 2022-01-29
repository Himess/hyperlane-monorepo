/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_processGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405162002dd938038062002dd98339818101604052606081101561003557600080fd5b50805160208201516040909201516001600160e01b031960e083901b16608052909190620cf85082101561009f576040805162461bcd60e51b815260206004820152600c60248201526b2170726f636573732067617360a01b604482015290519081900360640190fd5b613a988110156100e5576040805162461bcd60e51b815260206004820152600c60248201526b21726573657276652067617360a01b604482015290519081900360640190fd5b60a082905260c081905260805160e01c9250612caa6200012f600039806108e65280610da8525080610d875280610e7f5280611509525080610b035280610b575250612caa6000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c8063928bc4b2116100d8578063c19d93fb1161008c578063e7e7a7b711610066578063e7e7a7b7146105e9578063f2fde38b14610634578063ffa1ad741461066757610182565b8063c19d93fb146105d1578063d88beda2146105d9578063df034cd0146105e157610182565b80639d54f419116100bd5780639d54f419146104cf578063a3f81d6814610502578063b31c01fb1461051f57610182565b8063928bc4b214610421578063961681dc146104c757610182565b806345630b1a1161013a57806371bfb7b81161011457806371bfb7b8146103b25780638d3638f4146103cf5780638da5cb5b146103f057610182565b806345630b1a146102f45780636188af0e146102fc57806367a6771d146103aa57610182565b80632bbd59ca1161016b5780632bbd59ca14610270578063371d3071146102ae57806339992668146102ec57610182565b806319d9d21a1461018757806325e3beda14610256575b600080fd5b610254600480360360a081101561019d57600080fd5b81359160208101918101906080810160608201356401000000008111156101c357600080fd5b8201836020820111156101d557600080fd5b803590602001918460018302840111640100000000831117156101f757600080fd5b91939092909160208101903564010000000081111561021557600080fd5b82018360208201111561022757600080fd5b8035906020019184600183028401116401000000008311171561024957600080fd5b509092509050610685565b005b61025e6108e4565b60408051918252519081900360200190f35b61028d6004803603602081101561028657600080fd5b5035610908565b6040518082600281111561029d57fe5b815260200191505060405180910390f35b6102d860048036036104408110156102c557600080fd5b508035906020810190610420013561091d565b604080519115158252519081900360200190f35b61025e610a3d565b61025e610a43565b610254600480360361044081101561031357600080fd5b81019060208101813564010000000081111561032e57600080fd5b82018360208201111561034057600080fd5b8035906020019184600183028401116401000000008311171561036257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610a5d565b61025e610ae9565b61025e600480360360208110156103c857600080fd5b5035610aef565b6103d7610b01565b6040805163ffffffff9092168252519081900360200190f35b6103f8610b25565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102d86004803603602081101561043757600080fd5b81019060208101813564010000000081111561045257600080fd5b82018360208201111561046457600080fd5b8035906020019184600183028401116401000000008311171561048657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b41945050505050565b6103d7611184565b610254600480360360208110156104e557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611190565b6102d86004803603602081101561051857600080fd5b503561126b565b6102546004803603606081101561053557600080fd5b81359160208101359181019060608101604082013564010000000081111561055c57600080fd5b82018360208201111561056e57600080fd5b8035906020019184600183028401116401000000008311171561059057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611294945050505050565b61028d6114e4565b61025e611507565b6103f861152b565b610254600480360360808110156105ff57600080fd5b5063ffffffff8135169073ffffffffffffffffffffffffffffffffffffffff602082013516906040810135906060013561154d565b6102546004803603602081101561064a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166116ed565b61066f6118cc565b6040805160ff9092168252519081900360200190f35b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156106b257fe5b141561071f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261076191889188359188908890819084018382808284376000920191909152506118d192505050565b80156107b057506107b086866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118d192505050565b80156107c157508435602086013514155b156108dc576107ce611969565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60356020526000908152604090205460ff1681565b60008060008581526035602052604090205460ff16600281111561093d57fe5b146109a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b60006109df8585602080602002604051908101604052809291908260208002808284376000920191909152508791506119739050565b90506109ea8161126b565b15610a30575050600083815260356020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610a36565b60009150505b9392505050565b60325481565b603154600090610a589063ffffffff16611a1e565b905090565b610a6f8380519060200120838361091d565b610ada57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610ae383610b41565b50505050565b60015481565b60346020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60365473ffffffffffffffffffffffffffffffffffffffff1690565b600080610b4e8382611a93565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610ba27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611ab9565b63ffffffff1614610c1457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610c417fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611aea565b9050600160008281526035602052604090205460ff166002811115610c6257fe5b14610cce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2170726f76656e00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60335460ff16600114610d4257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e7400000000000000000000000000000000000000000000604482015290519081900360640190fd5b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009081169091556000828152603560205260409020805490911660021790557f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000015a1015610e3857604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610e657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611b29565b6040805161010080825261012082019092529192506000917f0000000000000000000000000000000000000000000000000000000000000000908390836020820181803683370190505090506000610ede7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611b3c565b610f097fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611b6c565b610f5e610f377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008c16611b9d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611c0e565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fb0578181015183820152602001610f98565b50505050905090810190601f168015610fdd5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d4750000000000000000000000000000000000000000000000000000000017815281519197506000965086955090935091508390508a88f198503d94508385111561107c578394505b848252846000602084013e816040518082805190602001908083835b602083106110d557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611098565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199091169216919091179052604051920182900382209350508b1515915089907fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4890600090a45050603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905550949695505050505050565b60315463ffffffff1681565b600061119a610b25565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806111f0575060006111d8610b25565b73ffffffffffffffffffffffffffffffffffffffff16145b90508061125e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e65720000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b61126782611c52565b5050565b6000818152603460205260408120548061128957600091505061128f565b42101590505b919050565b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156112c157fe5b141561132e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b600154831461139e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b6113a98383836118d1565b61141457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b61141c611971565b6032546000838152603460209081526040808320429094019093556001859055603154835182815285518184015285518795899563ffffffff909416947f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b29489949384938401928601918190849084905b838110156114a557818101518382015260200161148d565b50505050905090810190601f1680156114d25780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b600054760100000000000000000000000000000000000000000000900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b600054610100900460ff16806115665750611566611cd3565b80611574575060005460ff16155b6115c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612b63602e913960400191505060405180910390fd5b600054610100900460ff1615801561162f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61163884611ce4565b6033805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009091168117909155603180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff881617905583815560008481526034602052604090205560328290556116b7336116ed565b80156116e657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b60006116f7610b25565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061174d57506000611735610b25565b73ffffffffffffffffffffffffffffffffffffffff16145b9050806117bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e65720000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821661183d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f216e65774f776e65720000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60365460405173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350603680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600081565b6000806118dc610a43565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061191d81611e78565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff166119498285611ec9565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b611971611f63565b565b8260005b6020811015611a1657600183821c16600085836020811061199457fe5b6020020151905081600114156119da5780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611a0c565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611977565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b815160009060208401611aae64ffffffffff85168284611fa6565b925050505b92915050565b6000611ab37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004612005565b600080611af683612026565b6bffffffffffffffffffffffff1690506000611b118461203a565b6bffffffffffffffffffffffff169091209392505050565b6000611ab3611b378361204e565b61207f565b6000611ab37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612005565b6000611ab37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020612082565b6000611ab3604c80611bd07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861661203a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff9190911603600061222d565b6060600080611c1c8461203a565b6bffffffffffffffffffffffff1690506040519150819250611c4184836020016122bf565b508181016020016040529052919050565b6000805473ffffffffffffffffffffffffffffffffffffffff83166201000081027fffffffffffffffffffff0000000000000000000000000000000000000000ffff9092169190911790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b6000611cde306123eb565b15905090565b600054610100900460ff1680611cfd5750611cfd611cd3565b80611d0b575060005460ff16155b611d60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612b63602e913960400191505060405180910390fd5b600054610100900460ff16158015611dc657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760100000000000000000000000000000000000000000000179055801561126757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114611f3b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a611f59868285856123f1565b9695505050505050565b600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b600080611fb384846125df565b9050604051811115611fc3575060005b80611ff1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610a36565b611ffc858585612651565b95945050505050565b60008160200360080260ff1661201c858585612082565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b6000611ab37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c6020612082565b90565b600060ff821661209457506000610a36565b61209d8461203a565b6bffffffffffffffffffffffff166120b88460ff85166125df565b1115612197576120f96120ca85612026565b6bffffffffffffffffffffffff166120e18661203a565b6bffffffffffffffffffffffff16858560ff16612664565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561215c578181015183820152602001612144565b50505050905090810190601f1680156121895780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff1611156121f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612bb3603a913960400191505060405180910390fd5b60088202600061220386612026565b6bffffffffffffffffffffffff169050600061221e836127bf565b91909501511695945050505050565b60008061223986612026565b6bffffffffffffffffffffffff16905061225286612808565b6122668561226084896125df565b906125df565b1115612295577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506122b7565b61229f81866125df565b90506122b38364ffffffffff168286611fa6565b9150505b949350505050565b60006122ca83612832565b61231f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612bed6028913960400191505060405180910390fd5b61232883612844565b61237d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612c15602b913960400191505060405180910390fd5b60006123888461203a565b6bffffffffffffffffffffffff16905060006123a385612026565b6bffffffffffffffffffffffff16905060006040519050848111156123c85760206060fd5b8285848460045afa50611f596123dd87612881565b64ffffffffff168685612651565b3b151590565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561246c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b206022913960400191505060405180910390fd5b8360ff16601b148061248157508360ff16601c145b6124d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b916022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612532573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611ffc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b81810182811015611ab357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b6060600061267186612887565b915050600061267f86612887565b915050600061268d86612887565b915050600061269b86612887565b915050838383836040516020018080612c40603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612b4282397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b60006128138261203a565b61281c83612026565b016bffffffffffffffffffffffff169050919050565b600061283d8261295b565b1592915050565b600061284f82612881565b64ffffffffff1664ffffffffff141561286a5750600061128f565b600061287583612808565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff1611156128ef5760ff600882021684901c6128ac81612983565b61ffff16841793508160ff166010146128c757601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161288d565b50600f5b60ff8160ff1610156129555760ff600882021684901c61291281612983565b61ffff16831792508160ff1660001461292d57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016128f3565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b600061299560048360ff16901c6129b3565b60ff161760081b62ffff00166129aa826129b3565b60ff1617919050565b600060f08083179060ff821614156129cf57603091505061128f565b8060ff1660f114156129e557603191505061128f565b8060ff1660f214156129fb57603291505061128f565b8060ff1660f31415612a1157603391505061128f565b8060ff1660f41415612a2757603491505061128f565b8060ff1660f51415612a3d57603591505061128f565b8060ff1660f61415612a5357603691505061128f565b8060ff1660f71415612a6957603791505061128f565b8060ff1660f81415612a7f57603891505061128f565b8060ff1660f91415612a9557603991505061128f565b8060ff1660fa1415612aab57606191505061128f565b8060ff1660fb1415612ac157606291505061128f565b8060ff1660fc1415612ad757606391505061128f565b8060ff1660fd1415612aed57606491505061128f565b8060ff1660fe1415612b0357606591505061128f565b8060ff1660ff1415612b1957606691505061128f565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a26469706673582212207663231537b3eb7c6df0847380b1241d47227b5b00d12ab78f6d36dbd9994c0464736f6c63430007060033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    ) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    );
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
