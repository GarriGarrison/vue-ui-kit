import { mount } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import { GuvView as View } from '../src/index';

describe('View', () => {
  const viewText = 'Hello from inside a view';

  /**
   * Positive testing
   */
  //* Old library used (for example)
  it('Render SPAN correctly', async () => {
    render(View, {
      props: {
        element: 'span',
      },
      slots: {
        default: viewText,
      },
    });

    const view = await screen.findByText(viewText);

    expect(view.innerHTML).toBe(viewText);
    expect(view.nodeName).toBe('SPAN');
  });

  it('Disabled', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('disabled');

    wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });

  it('Aria-label -> add', async () => {
    render(View, {
      props: {
        element: 'div',
        ariaLabel: 'aria-tag',
      },
      slots: {
        default: 'View',
      },
    });

    const view = await screen.findByText('View');
    expect(view.getAttribute('aria-label')).toBe('aria-tag');
  });

  it('Id -> add', async () => {
    render(View, {
      props: {
        id: 'super_id',
        element: 'div',
      },
      slots: {
        default: 'View id',
      },
    });

    const view = await screen.findByText('View id');
    expect(view.getAttribute('id')).toBe('super_id');
  });

  it('Classes -> main', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    expect(wrapper.classes()).toContain('guv-view');
  });

  it('Classes -> test', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
        class: 'test',
      },
    });

    expect(wrapper.classes()).toContain('test');
  });

  it('Style -> add', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
        style: { paddingTop: '10px' },
      },
    });

    expect(wrapper.attributes().style).toContain('padding-top: 10px;');
  });

  it('Emit -> mounted', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    expect(wrapper.emitted()).toHaveProperty('mount');
  });

  it('Emit -> unmounted', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    wrapper.unmount();
    expect(wrapper.emitted()).toHaveProperty('unmount');
  });

  it('Emit -> focusin', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    wrapper.trigger('focusin');
    expect(wrapper.emitted()).toHaveProperty('focusin');
  });

  it('Emit -> focusout', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    wrapper.trigger('focusout');
    expect(wrapper.emitted()).toHaveProperty('focusout');
  });

  it('Emit -> click', () => {
    expect(View).toBeTruthy();

    const wrapper = mount(View, {
      props: {
        element: 'div',
      },
    });

    wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
