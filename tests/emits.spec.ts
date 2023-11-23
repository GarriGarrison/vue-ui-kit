import { describe, expect, it } from 'vitest';
import {
  onMount,
  onUnmount,
  onClick,
  onFocusin,
  onFocusout,
  onKeydown,
  onUpdateModelValue,
  onInput,
} from '../src/common/mixin/emits';

describe('Hooks emit', () => {
  it('onMount', () => {
    expect(onMount(() => {})).toBe(undefined);
  });

  it('onUnmount', () => {
    expect(onUnmount(() => {})).toBe(undefined);
  });

  it('onFocusin', () => {
    expect(onFocusin(() => {})).toBe(undefined);
  });

  it('onFocusout', () => {
    expect(onFocusout(() => {})).toBe(undefined);
  });

  it('onClick', () => {
    expect(onClick(() => {}, 'click' as unknown as MouseEvent)).toBe(undefined);
  });

  it('onKeydown', () => {
    expect(onKeydown(() => {}, 'keydown' as unknown as KeyboardEvent)).toBe(undefined);
  });

  it('onUpdateModelValue', () => {
    expect(onUpdateModelValue(() => {}, 'update:modelValue' as unknown)).toBe(undefined);
  });

  it('onInput', () => {
    expect(onInput(() => {}, 'input' as unknown)).toBe(undefined);
  });
});
