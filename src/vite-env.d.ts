/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

//* fixing fetch
interface Body {
  json(): Promise<unknown>;
}

//* fixing JSON.parse
interface JSON {
  parse(text: string, reviver?: (tis: any, key: string, value: any) => any): unknown;
}

//* fixing structuredClone
declare function structuredClone<T>(value: T, options?: StructuredSerializeOptions): T;

//* fixing Array.isArray
interface ArrayConstructor {
  isArray(arg: any): arg is unknown[];
}
