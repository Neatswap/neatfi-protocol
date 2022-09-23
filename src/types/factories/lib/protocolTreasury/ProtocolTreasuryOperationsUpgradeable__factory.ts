/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ProtocolTreasuryOperationsUpgradeable,
  ProtocolTreasuryOperationsUpgradeableInterface,
} from "../../../lib/protocolTreasury/ProtocolTreasuryOperationsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenHolder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lockedTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableToUnlockAt",
            type: "uint256",
          },
          {
            internalType:
              "enum ProtocolTreasuryStorageUpgradeable.LockerStatus",
            name: "lockerStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct ProtocolTreasuryStorageUpgradeable.Locker",
        name: "locker",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "lockerHash",
        type: "bytes32",
      },
    ],
    name: "LockerCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenHolder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lockedTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableToUnlockAt",
            type: "uint256",
          },
          {
            internalType:
              "enum ProtocolTreasuryStorageUpgradeable.LockerStatus",
            name: "lockerStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct ProtocolTreasuryStorageUpgradeable.Locker",
        name: "locker",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "lockerHash",
        type: "bytes32",
      },
    ],
    name: "LockerUnlocked",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "yield",
        type: "uint256",
      },
    ],
    name: "YieldClaimed",
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
    name: "DAY",
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
    name: "currentFeeDistributionPool",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTimestamp",
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
    name: "lastPoolGenerationTimestamp",
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
        name: "",
        type: "address",
      },
    ],
    name: "lockedNeatsByAddress",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockerInfo",
    outputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lockedTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableToUnlockAt",
        type: "uint256",
      },
      {
        internalType: "enum ProtocolTreasuryStorageUpgradeable.LockerStatus",
        name: "lockerStatus",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lockersByAddress",
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
    name: "neatTokenAddress",
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
    name: "protocolSettingsAddress",
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
    name: "totalLockedNeats",
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
    name: "vestingEscrowAddress",
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
  "0x6080806040523461001657610ac3908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182630153432d1461061a5750816301ffc9a7146105c457816302ee0efb1461058c57816313f405c71461056d578163153d7334146105325781631fe70d8c146104b5578163248a9ca31461048a57816327cfe8561461046c5781632f2ff15d146103c057816336568abe1461032f57816343ab086d1461030657816348f7aa7a146102b65781635505a9b51461028d57816382aba4dc1461026e57816391d148541461022757816394658d7e146101ec578163a217fddf146101d1578163d547741f1461018c57508063da25ace414610164578063e27e69751461012d5763f05690c41461010c57600080fd5b34610129578160031936011261012957602090609a549051908152f35b5080fd5b50346101295760203660031901126101295760209181906001600160a01b03610154610654565b168152609e845220549051908152f35b503461012957816003193601126101295760995490516001600160a01b039091168152602090f35b9050346101cd57816003193601126101cd576101ca90356101ab61066f565b9080855260656020526101c56001858720015433906106ba565b6109ee565b51f35b8280fd5b50503461012957816003193601126101295751908152602090f35b505034610129578160031936011261012957602090517f0245b6cbab6b03e029f6c88bff9595f9f5c30170f52598c3459ee71476ad59c18152f35b9050346101cd57816003193601126101cd578160209360ff9261024861066f565b90358252606586528282206001600160a01b039091168252855220549151911615158152f35b505034610129578160031936011261012957602090609c549051908152f35b50503461012957816003193601126101295760985490516001600160a01b039091168152602090f35b5050346101295780600319360112610129576102d0610654565b6001600160a01b03168252609f6020528082208054602435919082101561030257835260209283902001549051908152f35b8380fd5b50503461012957816003193601126101295760975490516001600160a01b039091168152602090f35b9050346101cd57816003193601126101cd5761034961066f565b90336001600160a01b0383160361036557906101ca91356109ee565b608490602084519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b9050346101cd57816003193601126101cd57356103db61066f565b81845260656020526103f46001848620015433906106ba565b818452606560209081528385206001600160a01b039092168086529190528284205460ff161561042357505051f35b8184526065602052828420818552602052828420600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d858551a451f35b50503461012957816003193601126101295760209051620151808152f35b9050346101cd5760203660031901126101cd5781602093600192358152606585522001549051908152f35b8383346101295760203660031901126101295782358252609d6020528082209160018060a01b038354169260018101549260028201549060ff8760038501549401541694815196875260208701528501526060840152600382101561051f5760a083836080820152f35b634e487b7160e01b815260218452602490fd5b505034610129578160031936011261012957602090517fec67990198cb34a8467e86e518c87d52127fe5b916e0095d8047a8355e37f63e8152f35b505034610129578160031936011261012957602090609b549051908152f35b5050346101295760203660031901126101295760209181906001600160a01b036105b4610654565b16815260a0845220549051908152f35b9050346101cd5760203660031901126101cd57359063ffffffff60e01b82168092036101cd5760209250637965db0b60e01b8214918215610609575b50519015158152f35b6301ffc9a760e01b14915038610600565b849034610129578160031936011261012957807fdb1507a7bd981676c03bdaae9e28ab8baadf8a4eee150a8b6a2dd2713db13a6460209252f35b600435906001600160a01b038216820361066a57565b600080fd5b602435906001600160a01b038216820361066a57565b918091926000905b8282106106a557501161069e575050565b6000910152565b9150806020918301518186015201829161068d565b6000908082526020606581526040938484209060018060a01b031690818552825260ff8585205416156106ee575050505050565b92845192606084019467ffffffffffffffff95858110878211176109da578752602a855283850191873684378551156109c657603083538551916001928310156109b2576078602188015360295b8381116109485750610872578751906080820182811089821117610934578952604282528582019260603685378251156109205760308453825181101561092057607860218401536041905b8082116108b45750506108725791610807949391889360679899519687936107dd8886019a7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c525180926037880190610685565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180936048840190610685565b0103602881018552601f1996879101168401968488109088111761085e57509261085560449593601f938880975262461bcd60e51b8752600487015251809281602488015287870190610685565b01168101030190fd5b634e487b7160e01b81526041600452602490fd5b60648589519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f8116601081101561090c576f181899199a1a9b1b9c1cb0b131b232b360811b901a6108e38486610a66565b5360041c9180156108f8576000190190610788565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90600f8116601081101561099e576f181899199a1a9b1b9c1cb0b131b232b360811b901a610976838a610a66565b5360041c90801561098a576000190161073c565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b84526032600452602484fd5b634e487b7160e01b84526041600452602484fd5b906000918083526065602052604083209160018060a01b03169182845260205260ff604084205416610a1f57505050565b8083526065602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b3393604051a4565b908151811015610a77570160200190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220ddbc1a108f38701e0211c5311e5203859a8687548800c9a6c01f72c93693b9ea64736f6c634300080f0033";

type ProtocolTreasuryOperationsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolTreasuryOperationsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolTreasuryOperationsUpgradeable__factory extends ContractFactory {
  constructor(...args: ProtocolTreasuryOperationsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProtocolTreasuryOperationsUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<ProtocolTreasuryOperationsUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProtocolTreasuryOperationsUpgradeable {
    return super.attach(address) as ProtocolTreasuryOperationsUpgradeable;
  }
  override connect(
    signer: Signer
  ): ProtocolTreasuryOperationsUpgradeable__factory {
    return super.connect(
      signer
    ) as ProtocolTreasuryOperationsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolTreasuryOperationsUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as ProtocolTreasuryOperationsUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolTreasuryOperationsUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProtocolTreasuryOperationsUpgradeable;
  }
}
