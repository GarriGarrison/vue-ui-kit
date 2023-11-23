import type { Meta, StoryObj } from '@storybook/vue3';
import GuvInput from './guv-input.vue';

const meta: Meta<typeof GuvInput> = {
  component: GuvInput,
  title: 'Components/Input',
  argTypes: {
    type: {
      description: 'text | number | password | email | tel | url | search',
    },
    modelValue: {
      description: 'string | number | null | undefined',
    },
  },
} satisfies Meta<typeof GuvInput>;

export default meta;
type Story = StoryObj<typeof GuvInput>;

export const ExampleDefault: Story = {
  args: {
    disabled: false,
    placeholder: 'placeholder',
    style: { backgroundColor: 'beige' },
    invalid: false,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
  },
};

export const Mask: Story = {
  args: {
    mask: /[0-9]/ as RegExp,
    placeholder: 'only number',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ErrorValidate: Story = {
  args: {
    invalid: true,
  },
};

export const addStyle: Story = {
  args: {
    style: { backgroundColor: 'beige' },
  },
};
