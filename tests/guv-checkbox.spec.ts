import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GuvCheckbox as Checkbox } from '../src/index';

describe('Button', () => {
  /**
   * Positive testing
   */
  it('Emits change value', async () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find('input').setValue(true);
    expect(wrapper.props('modelValue')).toBe(true);
  });

  it('Props -> minus-icon', async () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        minusIcon: true,
      },
    });

    expect(wrapper.find('label').classes()).toContain('minus');
  });

  it('Props -> minus-icon checked', async () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        minusIcon: true,
      },
    });

    await wrapper.find('input').setValue(false);
    expect(wrapper.find('label').classes()).toContain('minus');
  });

  it('Props -> checked', async () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: undefined,
        checked: true,
      },
    });

    expect(wrapper.props('modelValue')).toBe(undefined);
  });

  it('Disabled', async () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        disabled: true,
      },
    });

    expect(wrapper.find('label').classes()).toContain('disabled');

    await wrapper.find('input').setValue(true);
    expect(wrapper.props('modelValue')).not.toBe(true);
    expect(wrapper.props('modelValue')).toBe(false);
  });

  it('Id -> add', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        id: 'super_id',
      },
    });
    expect(wrapper.element.id).toBe('super_id');
  });

  it('Classes -> main', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    expect(wrapper.classes()).toContain('guv-checkbox');
  });

  it('Classes -> test', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        class: 'test',
      },
    });
    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        style: { paddingTop: '10px' },
      },
    });
    expect(wrapper.attributes().style).toContain('padding-top: 10px;');
  });

  it('Emit -> mounted', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });

  it('Emit -> focusin', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    wrapper.trigger('focusin');
    expect(wrapper.emitted()).toHaveProperty('focusin');
  });

  it('Emit -> focusout', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    wrapper.trigger('focusout');
    expect(wrapper.emitted()).toHaveProperty('focusout');
  });

  it('Emit -> click', () => {
    expect(Checkbox).toBeTruthy();

    const wrapper = mount(Checkbox);
    wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});
