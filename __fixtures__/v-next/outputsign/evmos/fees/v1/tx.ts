import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.fees.v1";
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** bech32 address of account receiving the transaction fees */
  withdrawAddress: string;
  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   */
  nonces: bigint[];
}
export interface MsgRegisterDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: Uint8Array;
}
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
  nonces: bigint[];
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponse {}
export interface MsgRegisterDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponseSDKType {}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
}
export interface MsgCancelDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponse {}
export interface MsgCancelDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponseSDKType {}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
  /** new withdraw bech32 address for receiving the transaction fees */
  withdrawAddress: string;
}
export interface MsgUpdateDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponse {}
export interface MsgUpdateDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponseSDKType {}
function createBaseMsgRegisterDevFeeInfo(): MsgRegisterDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: "",
    nonces: []
  };
}
export const MsgRegisterDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
  encode(message: MsgRegisterDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    writer.uint32(34).fork();
    for (const v of message.nonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nonces.push(reader.uint64());
            }
          } else {
            message.nonces.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoProtoMsg): MsgRegisterDevFeeInfo {
    return MsgRegisterDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfo): Uint8Array {
    return MsgRegisterDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
      value: MsgRegisterDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterDevFeeInfoResponse(): MsgRegisterDevFeeInfoResponse {
  return {};
}
export const MsgRegisterDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
  encode(_: MsgRegisterDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoResponseProtoMsg): MsgRegisterDevFeeInfoResponse {
    return MsgRegisterDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfoResponse): Uint8Array {
    return MsgRegisterDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
      value: MsgRegisterDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfo(): MsgCancelDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
  encode(message: MsgCancelDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoProtoMsg): MsgCancelDevFeeInfo {
    return MsgCancelDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfo): Uint8Array {
    return MsgCancelDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
      value: MsgCancelDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfoResponse(): MsgCancelDevFeeInfoResponse {
  return {};
}
export const MsgCancelDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
  encode(_: MsgCancelDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoResponseProtoMsg): MsgCancelDevFeeInfoResponse {
    return MsgCancelDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfoResponse): Uint8Array {
    return MsgCancelDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
      value: MsgCancelDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfo(): MsgUpdateDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const MsgUpdateDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
  encode(message: MsgUpdateDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoProtoMsg): MsgUpdateDevFeeInfo {
    return MsgUpdateDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfo): Uint8Array {
    return MsgUpdateDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
      value: MsgUpdateDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfoResponse(): MsgUpdateDevFeeInfoResponse {
  return {};
}
export const MsgUpdateDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
  encode(_: MsgUpdateDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoResponseProtoMsg): MsgUpdateDevFeeInfoResponse {
    return MsgUpdateDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfoResponse): Uint8Array {
    return MsgUpdateDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
      value: MsgUpdateDevFeeInfoResponse.encode(message).finish()
    };
  }
};