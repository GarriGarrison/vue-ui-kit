import type { Meta, StoryObj } from '@storybook/vue3';
import GuvCheckbox from './guv-checkbox.vue';

const meta: Meta<typeof GuvCheckbox> = {
  component: GuvCheckbox,
  title: 'Components/Checkbox',
  argTypes: {
    modelValue: {
      description: 'boolean | undefined',
    },
  },
} satisfies Meta<typeof GuvCheckbox>;

export default meta;
type Story = StoryObj<typeof GuvCheckbox>;

export const ExampleDefault: Story = {
  args: {
    title: 'Check me',
    disabled: false,
    minusIcon: true,
    checked: true,
    style: { backgroundColor: 'beige' },
  },
};

export const MinusIcon: Story = {
  args: {
    title: 'Check me',
    minusIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Not check me, Disabled',
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    title: 'Checked',
    checked: true,
  },
};

export const addStyle: Story = {
  args: {
    style: { backgroundColor: 'beige' },
  },
};
