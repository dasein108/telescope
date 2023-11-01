import { BinaryReader, BinaryWriter } from "./binary";
import { Any } from "./google/protobuf/any";

export interface TelescopeGeneratedType<T> {
  readonly typeUrl: string;
  is(o: unknown): o is T;
  encode: (message: T, writer?: BinaryWriter) => BinaryWriter;
  decode: (input: BinaryReader | Uint8Array, length?: number) => T;
  fromPartial: (object: any) => T;
  fromJSON: (object: unknown) => T;
  toJSON(message: T): unknown;
  toProto(message: T): Uint8Array;
  fromProtoMsg(message: Any): T;
  toProtoMsg(message: T): Any;
}

export class GlobalDecoderRegistry {
  static registry: {
    [key: string]: TelescopeGeneratedType<any>;
  } = {};
  static register<T>(key: string, decoder: TelescopeGeneratedType<T>) {
    GlobalDecoderRegistry.registry[key] = decoder;
  }
  static getDecoder<T>(key: string): TelescopeGeneratedType<T> {
    return GlobalDecoderRegistry.registry[key];
  }
  static getDecoderByInstance<T>(
    obj: unknown
  ): TelescopeGeneratedType<T> | null {
    for (const key in GlobalDecoderRegistry.registry) {
      if (
        Object.prototype.hasOwnProperty.call(
          GlobalDecoderRegistry.registry,
          key
        )
      ) {
        const element = GlobalDecoderRegistry.registry[key];

        if (element.is(obj)) {
          return element;
        }
      }
    }

    return null;
  }
  static wrapAny(obj: unknown): Any {
    const decoder = GlobalDecoderRegistry.getDecoderByInstance(obj);

    if (!decoder) {
      throw new Error(`There's no encoder for the instance ${obj}`);
    }

    return decoder.toProtoMsg(obj);
  }
  static unwrapAny<T>(input: BinaryReader | Uint8Array) {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);

    const data = Any.decode(reader, reader.uint32());

    const decoder = GlobalDecoderRegistry.getDecoder<T>(data.typeUrl);

    if (!decoder) {
      return data;
    }

    return decoder.decode(data.value);
  }
}