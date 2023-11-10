import { describe, expect, it } from 'vitest';
import { onMount, onUnmount, onClick } from '../src/common/mixin/emits';

describe('Hooks emit', () => {
  it('onMount', () => {
    expect(onMount(() => {})).toBe(undefined);
  });

  it('onUnmount', () => {
    expect(onUnmount(() => {})).toBe(undefined);
  });

  it('onClick', () => {
    expect(onClick(() => {}, 'click' as unknown as MouseEvent)).toBe(undefined);
  });
});
