import type { Meta, StoryObj } from '@storybook/vue3';
import GuvView from './guv-view.vue';

const meta: Meta<typeof GuvView> = {
  component: GuvView,
  title: 'Components/View',
  argTypes: {
    element: {
      description: 'div | span | ...',
    },
    ariaLabel: {
      description: 'string',
    },
  },
} satisfies Meta<typeof GuvView>;

export default meta;
type Story = StoryObj<typeof GuvView>;

export const ExampleDefault: Story = {
  args: {
    element: 'div',
    ariaLabel: 'aria-tag',
    disabled: false,
    style: { backgroundColor: 'gray', height: '50px' },
  },
};

export const Div: Story = {
  args: {
    element: 'div',
    style: { border: '1px solid black', height: '50px', width: '100px' },
  },
};

export const Disabled: Story = {
  args: {
    element: 'div',
    style: { border: '1px solid gray', height: '50px', width: '100px' },
    disabled: true,
  },
};

export const addStyle: Story = {
  args: {
    element: 'div',
    style: { backgroundColor: 'beige', border: '1px solid gray', height: '50px', width: '100px' },
  },
};
