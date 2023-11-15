import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GuvButton as Button } from '../src/';

describe('Button', () => {
  /**
   * Positive testing
   */
  it('Title -> test', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        title: 'Click me',
      },
    });
    expect(wrapper.html()).toContain('Click me');
  });

  it('Title -> undefined', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button);
    expect(wrapper.html()).toContain('');
  });

  it('Slots', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      slots: {
        before: 'Before',
        after: '<div>After</div>',
      },
    });
    expect(wrapper.html()).toContain('Before');
    expect(wrapper.html()).toContain('<div>After</div>');
  });

  it('Size -> standard', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        size: 'standard',
      },
    });
    expect(wrapper.classes()).toContain('standard');
  });

  it('Size -> small', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        size: 'small',
      },
    });
    expect(wrapper.classes()).toContain('small');
  });

  it('Classes -> main', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('guv-button');
  });

  it('Classes -> test', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        class: 'test',
      },
    });
    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        style: { paddingTop: '10px' },
      },
    });
    expect(wrapper.attributes().style).toContain('padding-top: 10px;');
  });

  it('Emit -> mounted', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button);
    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button);
    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });

  it('Emit -> click', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('Disabled', () => {
    expect(Button).toBeTruthy();

    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('disabled');

    wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});
