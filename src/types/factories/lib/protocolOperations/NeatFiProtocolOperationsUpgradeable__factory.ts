/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NeatFiProtocolOperationsUpgradeable,
  NeatFiProtocolOperationsUpgradeableInterface,
} from "../../../lib/protocolOperations/NeatFiProtocolOperationsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "AUTHORIZED_OPERATOR",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "PROTOCOL_ADMIN",
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
    inputs: [],
    name: "PROTOCOL_TREASURER",
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
    inputs: [],
    name: "actorFactory",
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
    inputs: [],
    name: "auctionModule",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "paymentsResolver",
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
    inputs: [],
    name: "protocolSettings",
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
    inputs: [],
    name: "protocolStorage",
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
    inputs: [],
    name: "protocolTreasury",
    outputs: [
      {
        internalType: "address payable",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sellModule",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "swapModule",
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
  "0x6080806040523461001657610976908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c9081630153432d146104d35750806301ffc9a714610478578063144842c714610450578063153d733414610416578063248a9ca3146103eb578063255fc138146103c35780632b7f5bcf1461039b5780632d640c4a146103735780632f2ff15d146102d357806336568abe1461024d5780635ca184f514610225578063789dc829146101fd578063803db96d146101d557806391d148541461019b57806394658d7e14610161578063a217fddf14610147578063d547741f146101135763fa716b3f146100e857600080fd5b3461010f578160031936011261010f5760975490516001600160a01b039091168152602090f35b5080fd5b503461010f576101446101253661050d565b90808552606560205261013f60018587200154339061056d565b6108a1565b51f35b503461010f578160031936011261010f5751908152602090f35b503461010f578160031936011261010f57602090517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b503461010f5760ff816020936101b03661050d565b908252606586528282206001600160a01b039091168252855220549151911615158152f35b503461010f578160031936011261010f57609e5490516001600160a01b039091168152602090f35b503461010f578160031936011261010f57609b5490516001600160a01b039091168152602090f35b503461010f578160031936011261010f57609d5490516001600160a01b039091168152602090f35b503461010f5761025c3661050d565b90336001600160a01b038316036102775790610144916108a1565b825162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b503461010f576102e23661050d565b81845260656020526102fb60018486200154339061056d565b818452606560209081528385206001600160a01b039092168086529190528284205460ff161561032a57505051f35b8184526065602052828420818552602052828420600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d858551a451f35b503461010f578160031936011261010f5760985490516001600160a01b039091168152602090f35b503461010f578160031936011261010f5760995490516001600160a01b039091168152602090f35b503461010f578160031936011261010f57609a5490516001600160a01b039091168152602090f35b503461010f57602036600319011261010f576001816020936004358152606585522001549051908152f35b503461010f578160031936011261010f57602090517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b503461010f578160031936011261010f57609c5490516001600160a01b039091168152602090f35b503461010f57602036600319011261010f576004359063ffffffff60e01b82168092036104cf5760209250637965db0b60e01b82149182156104be575b50519015158152f35b6301ffc9a760e01b149150386104b5565b8280fd5b83903461010f578160031936011261010f57807fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6460209252f35b604090600319011261053357600435906024356001600160a01b03811681036105335790565b600080fd5b918091926000905b828210610558575011610551575050565b6000910152565b91508060209183015181860152018291610540565b6000908082526020606581526040938484209060018060a01b031690818552825260ff8585205416156105a1575050505050565b92845192606084019467ffffffffffffffff958581108782111761088d578752602a855283850191873684378551156108795760308353855191600192831015610865576078602188015360295b8381116107fb57506107255787519060808201828110898211176107e7578952604282528582019260603685378251156107d3576030845382518110156107d357607860218401536041905b80821161076757505061072557916106ba949391889360679899519687936106908886019a7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c525180926037880190610538565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180936048840190610538565b0103602881018552601f1996879101168401968488109088111761071157509261070860449593601f938880975262461bcd60e51b8752600487015251809281602488015287870190610538565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f811660108110156107bf576f181899199a1a9b1b9c1cb0b131b232b360811b901a6107968486610919565b5360041c9180156107ab57600019019061063b565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f81166010811015610851576f181899199a1a9b1b9c1cb0b131b232b360811b901a610829838a610919565b5360041c90801561083d57600019016105ef565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b906000918083526065602052604083209160018060a01b03169182845260205260ff6040842054166108d257505050565b8083526065602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b3393604051a4565b90815181101561092a570160200190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212202fe958648f5f0816d341fed0cd5ec021f5e35b1ccbd8ef4fc3bff0133896b24d64736f6c634300080f0033";

type NeatFiProtocolOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NeatFiProtocolOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NeatFiProtocolOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: NeatFiProtocolOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NeatFiProtocolOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<NeatFiProtocolOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NeatFiProtocolOperationsUpgradeable {
    return super.attach(address) as NeatFiProtocolOperationsUpgradeable;
  }
  override connect(
    signer: Signer
  ): NeatFiProtocolOperationsUpgradeable__factory {
    return super.connect(
      signer
    ) as NeatFiProtocolOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NeatFiProtocolOperationsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as NeatFiProtocolOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NeatFiProtocolOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NeatFiProtocolOperationsUpgradeable;
  }
}
