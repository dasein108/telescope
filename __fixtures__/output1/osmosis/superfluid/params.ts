import * as _m0 from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Params {
  minimumRiskFactor: string;
}

function createBaseParams(): Params {
  return {
    minimumRiskFactor: ""
  };
}

export const Params = {
  encode(message: Params, writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumRiskFactor !== "") {
      writer.uint32(10).string(message.minimumRiskFactor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minimumRiskFactor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      minimumRiskFactor: isSet(object.minimumRiskFactor) ? String(object.minimumRiskFactor) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minimumRiskFactor !== undefined && (obj.minimumRiskFactor = message.minimumRiskFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minimumRiskFactor = object.minimumRiskFactor ?? "";
    return message;
  }

};