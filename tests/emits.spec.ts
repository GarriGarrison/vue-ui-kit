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
  onChange,
  type Mount,
  type Unmount,
  type Focusin,
  type Focusout,
  type Click,
  type Keydown,
  type Update,
  type Input,
  type Change,
} from '../src/common/mixin/emits';

describe('Hooks emit', () => {
  const events = {};

  it('onMount', () => {
    const expected: Mount = 'mount';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
    };

    onMount(emit);
  });

  it('onUnmount', () => {
    const expected: Unmount = 'unmount';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
    };

    onUnmount(emit);
  });

  it('onFocusin', () => {
    const expected: Focusin = 'focusin';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
    };

    onFocusin(emit);
  });

  it('onFocusout', () => {
    const expected: Focusout = 'focusout';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
    };

    onFocusout(emit);
  });

  it('onClick', () => {
    const expected: Click = 'click';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
      expect(events[event]).toEqual(['mouse clicked']);
    };

    onClick(emit, 'mouse clicked' as unknown as MouseEvent);
  });

  it('onKeydown', () => {
    const expected: Keydown = 'keydown';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
      expect(events[event]).toEqual(['keydown clicked']);
    };

    onKeydown(emit, 'keydown clicked' as unknown as KeyboardEvent);
  });

  it('onUpdateModelValue', () => {
    const expected: Update = 'update:modelValue';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
      expect(events[event]).toEqual(['update modelValue']);
    };

    onUpdateModelValue(emit, 'update modelValue' as unknown);
  });

  it('onChange', () => {
    const expected: Change = 'change';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
      expect(events[event]).toEqual(['change value']);
    };

    onChange(emit, 'change value' as unknown);
  });

  it('onInput', () => {
    const expected: Input = 'input';

    const emit = (event, ...args): void => {
      events[event] = [...args];

      expect(event).toBe(expected);
      expect(events[event]).toEqual(['input value']);
    };

    onInput(emit, 'input value' as unknown);
  });
});
