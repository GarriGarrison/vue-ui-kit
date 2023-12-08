/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import sinon from 'sinon';
import { GuvInput as Input } from '../src/index';

describe('Button', () => {
  /**
   * Positive testing
   */
  it('Emits input value when changed', async () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: 'Test Value',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find('input').setValue('New Test Value');
    expect(wrapper.props('modelValue')).toBe('New Test Value');
  });

  it('Mask input', async () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: 'Test Value',
        mask: /\d/,
      },
    });

    const myEvent = new KeyboardEvent('keydown', { key: 'a' });
    sinon.spy(myEvent, 'preventDefault');

    await wrapper.find('input').element.dispatchEvent(myEvent);
    // @ts-ignore
    expect(myEvent.preventDefault.calledOnce).to.equal(true);
  });

  it('Integer input', async () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: 'Test Value',
        integer: true,
      },
    });

    const myEvent = new KeyboardEvent('keydown', { key: 'z' });
    sinon.spy(myEvent, 'preventDefault');

    await wrapper.find('input').element.dispatchEvent(myEvent);
    // @ts-ignore
    expect(myEvent.preventDefault.calledOnce).to.equal(true);
  });

  it('Placeholder', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        placeholder: 'Placeholder Input',
      },
    });
    expect(wrapper.html()).toContain('Placeholder Input');
  });

  it('Error validated', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        invalid: true,
      },
    });

    expect(wrapper.classes()).toContain('error');
  });

  it('Focused', async () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        focus: true,
      },
      attachTo: document.body,
    });

    await nextTick();

    expect(wrapper.element).toBe(document.activeElement);
  });

  it('Id -> add', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        id: 'super_id',
      },
    });

    expect(wrapper.element.id).toBe('super_id');
  });

  it('Classes -> main', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    expect(wrapper.classes()).toContain('guv-input');
  });

  it('Classes -> test', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        class: 'test',
      },
    });
    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        style: { paddingTop: '10px' },
      },
    });
    expect(wrapper.attributes().style).toContain('padding-top: 10px;');
  });

  it('Emit -> mounted', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });

  it('Emit -> focusin', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    wrapper.trigger('focusin');
    expect(wrapper.emitted()).toHaveProperty('focusin');
  });

  it('Emit -> focusout', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    wrapper.trigger('focusout');
    expect(wrapper.emitted()).toHaveProperty('focusout');
  });

  it('Emit -> input', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    wrapper.trigger('input');
    expect(wrapper.emitted()).toHaveProperty('input');
  });

  it('Emit -> keydown', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input);
    wrapper.trigger('keydown');
    expect(wrapper.emitted()).toHaveProperty('keydown');
  });

  it('Disabled', () => {
    expect(Input).toBeTruthy();

    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('disabled');

    wrapper.trigger('focusin');
    expect(wrapper.emitted()).not.toHaveProperty('focusin');
  });
});
