import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GuvButton as Button } from '../src/';

describe('Button', () => {
  /**
   * Positive testing
   */
  it('Title -> test', () => {
    const wrapper = mount(Button, {
      props: {
        title: 'Click me',
      },
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toContain('Click me');
  });

  it('Title -> undefined', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toContain('');
  });

  it('Slots', () => {
    const wrapper = mount(Button, {
      slots: {
        before: 'Before',
        after: '<div>After</div>',
      },
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.html()).toContain('Before');
    expect(wrapper.html()).toContain('<div>After</div>');
  });

  it('Classes -> main', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();
    expect(wrapper.classes()).toContain('guv-button');
  });

  it('Classes -> test', () => {
    const wrapper = mount(Button, {
      props: {
        class: 'test',
      },
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    const wrapper = mount(Button, {
      props: {
        style: { paddingTop: '10px' },
      },
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.attributes().style).toContain('padding-top: 10px;');
  });

  it('Emit -> mounted', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();
    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();

    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });

  it('Emit -> click', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();

    wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('Disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper).toBeTruthy();

    expect(wrapper.classes()).toContain('disabled');

    wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});
