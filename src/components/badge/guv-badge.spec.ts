import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Badge from './guv-badge.vue';

describe('Button', () => {
  /**
   * Positive testing
   */
  it('Counter -> number', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 5,
      },
    });
    expect(wrapper.html()).toContain(5);
  });

  it('Counter -> mode=Burn', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: {
          count: 3,
          mode: 0,
        },
      },
    });
    expect(wrapper.html()).toContain(3);
  });

  it('Counter -> mode=Blink', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: {
          count: 2,
          mode: 0,
        },
      },
    });
    expect(wrapper.html()).toContain(2);
  });

  it('Counter -> number = 0', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 0,
      },
    });
    expect(wrapper.html()).not.toContain(0);
  });

  it('Classes -> main', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 1,
      },
    });
    expect(wrapper.classes()).toContain('guv-badge');
  });

  it('Classes -> test', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 1,
        class: 'test',
      },
    });
    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 1,
        style: { backgroundColor: 'green' },
      },
    });
    expect(wrapper.attributes().style).toContain('background-color: green;');
  });

  it('Emit -> mounted', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 1,
      },
    });
    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    expect(Badge).toBeTruthy();

    const wrapper = mount(Badge, {
      props: {
        counter: 1,
      },
    });
    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });
});
