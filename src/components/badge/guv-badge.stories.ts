import type { Meta, StoryObj } from '@storybook/vue3';
import GuvBadge from './guv-badge.vue';

const meta: Meta<typeof GuvBadge> = {
  component: GuvBadge,
  title: 'Components/Badge',
  argTypes: {
    counter: {
      description: 'number | {count: number, mode: 0 | 1}',
    },
  },
} satisfies Meta<typeof GuvBadge>;

export default meta;
type Story = StoryObj<typeof GuvBadge>;

export const CounterNumber: Story = {
  args: {
    counter: 5,
  },
};

export const CounterBurn: Story = {
  args: {
    counter: {
      count: 5,
      mode: 0,
    },
  },
};

export const CounterBlink: Story = {
  args: {
    counter: {
      count: 5,
      mode: 1,
    },
  },
};

export const CounterBackgroundBlue: Story = {
  args: {
    counter: 5,
    style: { backgroundColor: 'blue' },
  },
};
