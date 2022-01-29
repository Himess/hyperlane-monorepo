/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeToken, BridgeTokenInterface } from "../BridgeToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    inputs: [],
    name: "_PERMIT_TYPEHASH",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "domainSeparator",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_newDecimals",
        type: "uint8",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9608052610120604052600160e052603160f81b610100527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a05261190160f01b60c05234801561007057600080fd5b5060805160a05160c05160f01c6121646100a560003980610f43525080611369525080610c835280610edf52506121646000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80638129fc1c116100e3578063a9059cbb1161008c578063f2fde38b11610066578063f2fde38b1461060b578063f698da251461063e578063ffa1ad74146106465761018d565b8063a9059cbb14610539578063d505accf14610572578063dd62ed3e146105d05761018d565b8063982aaf6b116100bd578063982aaf6b146104bf5780639dc29fac146104c7578063a457c2d7146105005761018d565b80638129fc1c1461047e5780638da5cb5b1461048657806395d89b41146104b75761018d565b8063395093511161014557806370a082311161011f57806370a0823114610410578063715018a6146104435780637ecebe001461044b5761018d565b806339509351146102d757806340c10f1914610310578063654935f41461034b5761018d565b806318160ddd1161017657806318160ddd1461025c57806323b872dd14610276578063313ce567146102b95761018d565b806306fdde0314610192578063095ea7b31461020f575b600080fd5b61019a61064e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d45781810151838201526020016101bc565b50505050905090810190601f1680156102015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102486004803603604081101561022557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610702565b604080519115158252519081900360200190f35b610264610718565b60408051918252519081900360200190f35b6102486004803603606081101561028c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561071e565b6102c1610794565b6040805160ff9092168252519081900360200190f35b610248600480360360408110156102ed57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561079d565b6103496004803603604081101561032657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107e0565b005b6103496004803603606081101561036157600080fd5b81019060208101813564010000000081111561037c57600080fd5b82018360208201111561038e57600080fd5b803590602001918460018302840111640100000000831117156103b057600080fd5b9193909290916020810190356401000000008111156103ce57600080fd5b8201836020820111156103e057600080fd5b8035906020019184600183028401116401000000008311171561040257600080fd5b91935091503560ff16610896565b6102646004803603602081101561042657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610990565b6103496109a1565b6102646004803603602081101561046157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ab8565b610349610aca565b61048e610be6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61019a610c02565b610264610c81565b610349600480360360408110156104dd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ca5565b6102486004803603604081101561051657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610d57565b6102486004803603604081101561054f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610db3565b610349600480360360e081101561058857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610dc0565b610264600480360360408110156105e657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166110ed565b6103496004803603602081101561062157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611125565b6102646112c7565b6102c16113bd565b60688054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106f85780601f106106cd576101008083540402835291602001916106f8565b820191906000526020600020905b8154815290600101906020018083116106db57829003601f168201915b5050505050905090565b600061070f3384846113c2565b50600192915050565b60675490565b600061072b848484611509565b61078a8433610785856040518060600160405280602881526020016120786028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260666020908152604080832033845290915290205491906116db565b6113c2565b5060019392505050565b606a5460ff1690565b33600081815260666020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161070f918590610785908661178c565b6107e8611807565b73ffffffffffffffffffffffffffffffffffffffff16610806610be6565b73ffffffffffffffffffffffffffffffffffffffff161461088857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610892828261180b565b5050565b61089e611807565b73ffffffffffffffffffffffffffffffffffffffff166108bc610be6565b73ffffffffffffffffffffffffffffffffffffffff161461093e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61094a60688686611ed7565b5061095760698484611ed7565b50606a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff9290921691909117905550505050565b600061099b8261193e565b92915050565b6109a9611807565b73ffffffffffffffffffffffffffffffffffffffff166109c7610be6565b73ffffffffffffffffffffffffffffffffffffffff1614610a4957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b606b6020526000908152604090205481565b600054610100900460ff1680610ae35750610ae3611966565b80610af1575060005460ff16155b610b46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061204a602e913960400191505060405180910390fd5b600054610100900460ff16158015610bac57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610bb4611977565b8015610be357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60698054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106f85780601f106106cd576101008083540402835291602001916106f8565b7f000000000000000000000000000000000000000000000000000000000000000081565b610cad611807565b73ffffffffffffffffffffffffffffffffffffffff16610ccb610be6565b73ffffffffffffffffffffffffffffffffffffffff1614610d4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6108928282611a69565b600061070f33846107858560405180606001604052806025815260200161210a6025913933600090815260666020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d16845290915290205491906116db565b600061070f338484611509565b83421115610e2f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8716610eb157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332305065726d69743a206f776e6572207a65726f206164647265737300604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8088166000818152606b602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e090940190528251920191909120907f0000000000000000000000000000000000000000000000000000000000000000610f6a6112c7565b83604051602001808461ffff1660f01b81526002018381526020018281526020019350505050604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611004573d6000803e3d6000fd5b5050506020604051035190508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110aa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8b166000908152606b602052604090206001850190556110e08b8b8b6113c2565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260666020908152604080832093909416825291909152205490565b61112d611807565b73ffffffffffffffffffffffffffffffffffffffff1661114b610be6565b73ffffffffffffffffffffffffffffffffffffffff16146111cd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611239576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fdc6026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000804690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6068600001604051808280546001816001161561010002031660029004801561134e5780601f1061132c57610100808354040283529182019161134e565b820191906000526020600020905b81548152906001019060200180831161133a575b505060408051918290038220602080840196909652828201527f0000000000000000000000000000000000000000000000000000000000000000606083015260808201959095523060a0808301919091528551808303909101815260c090910190945250508151910120905090565b600081565b73ffffffffffffffffffffffffffffffffffffffff831661142e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120e66024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661149a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806120026022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260666020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316611575576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806120c16025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115e1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611f976023913960400191505060405180910390fd5b6115ec838383611bb3565b611636816040518060600160405280602681526020016120246026913973ffffffffffffffffffffffffffffffffffffffff861660009081526065602052604090205491906116db565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152606560205260408082209390935590841681522054611672908261178c565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526065602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611784576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611749578181015183820152602001611731565b50505050905090810190601f1680156117765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561180057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff821661188d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61189960008383611bb3565b6067546118a6908261178c565b60675573ffffffffffffffffffffffffffffffffffffffff82166000908152606560205260409020546118d9908261178c565b73ffffffffffffffffffffffffffffffffffffffff831660008181526065602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526065602052604090205490565b600061197130611bb8565b15905090565b600054610100900460ff16806119905750611990611966565b8061199e575060005460ff16155b6119f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061204a602e913960400191505060405180910390fd5b600054610100900460ff16158015611a5957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611a61611bbe565b610bb4611cd0565b73ffffffffffffffffffffffffffffffffffffffff8216611ad5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120a06021913960400191505060405180910390fd5b611ae182600083611bb3565b611b2b81604051806060016040528060228152602001611fba6022913973ffffffffffffffffffffffffffffffffffffffff851660009081526065602052604090205491906116db565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260656020526040902055606754611b5e9082611e60565b60675560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b3b151590565b600054610100900460ff1680611bd75750611bd7611966565b80611be5575060005460ff16155b611c3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061204a602e913960400191505060405180910390fd5b600054610100900460ff16158015610bb457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610be357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611ce95750611ce9611966565b80611cf7575060005460ff16155b611d4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061204a602e913960400191505060405180910390fd5b600054610100900460ff16158015611db257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000611dbc611807565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610be357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600082821115611ed157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611f0d5760008555611f71565b82601f10611f44578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611f71565b82800160010185558215611f71579182015b82811115611f71578235825591602001919060010190611f56565b50611f7d929150611f81565b5090565b5b80821115611f7d5760008155600101611f8256fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122021f1b7136c3f8a8b8e54579a3b8f27be7452c7eff9979b20267f5d1b4b428fb764736f6c63430007060033";

export class BridgeToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeToken> {
    return super.deploy(overrides || {}) as Promise<BridgeToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeToken {
    return super.attach(address) as BridgeToken;
  }
  connect(signer: Signer): BridgeToken__factory {
    return super.connect(signer) as BridgeToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeTokenInterface {
    return new utils.Interface(_abi) as BridgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeToken {
    return new Contract(address, _abi, signerOrProvider) as BridgeToken;
  }
}
