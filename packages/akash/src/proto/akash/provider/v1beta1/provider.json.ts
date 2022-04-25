import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { ProviderInfo, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider, Provider, MsgCreateProviderResponse, MsgUpdateProviderResponse, MsgDeleteProviderResponse, Msg, Rpc } from "./provider";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
export const json = {
  createProvider(value: MsgCreateProvider) {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
      value
    };
  },

  updateProvider(value: MsgUpdateProvider) {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
      value
    };
  },

  deleteProvider(value: MsgDeleteProvider) {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
      value
    };
  }

};