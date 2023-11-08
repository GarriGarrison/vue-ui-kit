/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Ref, ComponentPublicInstance } from 'vue';

export type VueComponent<T = ComponentPublicInstance> = T extends abstract new (...args: any) => any
  ? InstanceType<T>
  : ComponentPublicInstance;
export type Value = string | number | boolean | unknown | string[];

export type CurrentValue = Ref<Value>;
export type ActiveValue = Ref<Value | null>;
