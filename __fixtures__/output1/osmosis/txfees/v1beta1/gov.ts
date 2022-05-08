import * as _m0 from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
import { FeeToken } from "./feetoken";
export interface UpdateFeeTokenProposal {
  title: string;
  description: string;
  feetoken: FeeToken;
}

function createBaseUpdateFeeTokenProposal(): UpdateFeeTokenProposal {
  return {
    title: "",
    description: "",
    feetoken: undefined
  };
}

export const UpdateFeeTokenProposal = {
  encode(message: UpdateFeeTokenProposal, writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.feetoken !== undefined) {
      FeeToken.encode(message.feetoken, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateFeeTokenProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFeeTokenProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.feetoken = FeeToken.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateFeeTokenProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      feetoken: isSet(object.feetoken) ? FeeToken.fromJSON(object.feetoken) : undefined
    };
  },

  toJSON(message: UpdateFeeTokenProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.feetoken !== undefined && (obj.feetoken = message.feetoken ? FeeToken.toJSON(message.feetoken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFeeTokenProposal>, I>>(object: I): UpdateFeeTokenProposal {
    const message = createBaseUpdateFeeTokenProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.feetoken = object.feetoken !== undefined && object.feetoken !== null ? FeeToken.fromPartial(object.feetoken) : undefined;
    return message;
  }

};