/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MetaFactory,
  MetaFactoryInterface,
} from "../../contracts/MetaFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "baseContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "contractId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "MetaCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "setTotalSupply",
        type: "uint256",
      },
    ],
    name: "createMeta",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "i_MetaTokenContract",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "viewCloneAddress",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "viewCloneTotalSupply",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516107b33803806107b3833981810160405281019061003291906100cf565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100fc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b6100ac81610091565b81146100b757600080fd5b50565b6000815190506100c9816100a3565b92915050565b6000602082840312156100e5576100e461006c565b5b60006100f3848285016100ba565b91505092915050565b60805161069561011e60003960008181610107015261035f01526106956000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630a68fd921461005157806371224c2814610081578063ab0715c6146100b1578063ad23e0ed146100e1575b600080fd5b61006b60048036038101906100669190610476565b6100ff565b60405161007891906104e4565b60405180910390f35b61009b60048036038101906100969190610476565b610275565b6040516100a891906104e4565b60405180910390f35b6100cb60048036038101906100c69190610476565b6102b2565b6040516100d8919061050e565b60405180910390f35b6100e961035d565b6040516100f691906104e4565b60405180910390f35b60008061012b7f0000000000000000000000000000000000000000000000000000000000000000610381565b90508073ffffffffffffffffffffffffffffffffffffffff1663fe4b84df846040518263ffffffff1660e01b8152600401610166919061050e565b600060405180830381600087803b15801561018057600080fd5b505af1158015610194573d6000803e3d6000fd5b505050506000808154809291906101aa90610558565b919050555080600160008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826002600080548152602001908152602001600020819055506000548173ffffffffffffffffffffffffffffffffffffffff167f3f4e79c8aaccb688ea4257c490a62117f2d021dfcea4ace33185750dcaa7281c85604051610264919061050e565b60405180910390a380915050919050565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610332573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035691906105b5565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f09050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d9061063f565b60405180910390fd5b919050565b600080fd5b6000819050919050565b61045381610440565b811461045e57600080fd5b50565b6000813590506104708161044a565b92915050565b60006020828403121561048c5761048b61043b565b5b600061049a84828501610461565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104ce826104a3565b9050919050565b6104de816104c3565b82525050565b60006020820190506104f960008301846104d5565b92915050565b61050881610440565b82525050565b600060208201905061052360008301846104ff565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061056382610440565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361059557610594610529565b5b600182019050919050565b6000815190506105af8161044a565b92915050565b6000602082840312156105cb576105ca61043b565b5b60006105d9848285016105a0565b91505092915050565b600082825260208201905092915050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b60006106296016836105e2565b9150610634826105f3565b602082019050919050565b600060208201905081810360008301526106588161061c565b905091905056fea26469706673582212201b3bad8620a1f9c5ec5f1d106329a3c10dfa92365e4f90163687102f2a295df364736f6c63430008120033";

type MetaFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaFactory__factory extends ContractFactory {
  constructor(...args: MetaFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    baseContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(baseContract, overrides || {});
  }
  override deploy(
    baseContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(baseContract, overrides || {}) as Promise<
      MetaFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MetaFactory__factory {
    return super.connect(runner) as MetaFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaFactoryInterface {
    return new Interface(_abi) as MetaFactoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MetaFactory {
    return new Contract(address, _abi, runner) as unknown as MetaFactory;
  }
}
