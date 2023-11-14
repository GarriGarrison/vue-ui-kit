import type { Meta, StoryObj } from '@storybook/vue3';
import GuvButton from './guv-button.vue';

const meta: Meta<typeof GuvButton> = {
  component: GuvButton,
} satisfies Meta<typeof GuvButton>;

export default meta;
type Story = StoryObj<typeof GuvButton>;

export const Example: Story = {
  args: {
    title: 'Click me',
    disabled: false,
    style: { backgroundColor: 'red' },
  },
};

export const Enabled: Story = {
  args: {
    title: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Button',
    disabled: true,
  },
};
