import type { Meta, StoryObj } from '@storybook/vue3';
import GuvButton from './guv-button.vue';

const meta: Meta<typeof GuvButton> = {
  component: GuvButton,
  title: 'Components/Button',
  argTypes: {
    size: {
      description: 'default | standard | small',
    },
  },
} satisfies Meta<typeof GuvButton>;

export default meta;
type Story = StoryObj<typeof GuvButton>;

export const ExampleDefault: Story = {
  args: {
    title: 'Click me',
    disabled: false,
    style: { backgroundColor: 'red' },
    size: 'default',
  },
};

export const EnabledDefault: Story = {};

export const DisabledDefault: Story = {
  args: {
    title: 'Button',
    disabled: true,
  },
};

export const EnabledStandard: Story = {
  args: {
    title: 'V',
    size: 'standard',
  },
};

export const DisabledStandard: Story = {
  args: {
    title: 'V',
    disabled: true,
    size: 'standard',
  },
};
