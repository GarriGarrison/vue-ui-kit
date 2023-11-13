/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent } from 'vue';
import GuvButton from './guv-button.vue';

export default {
  title: 'Button',
  component: GuvButton,
  argTypes: {
    title: {
      control: { type: 'string' },
      defaultValue: 'Button',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onClick: {},
  },
};

const Template = (args) =>
  defineComponent({
    components: { GuvButton },
    setup() {
      return { args };
    },
    template: '<guv-button v-bind="args"> {{ args.title }} </guv-button>',
  });

export const DefaultButton = (args) => ({
  components: { GuvButton },
  setup() {
    return { args };
  },
  template: '<guv-button v-bind="args">Button!</guv-button>',
});

export const Enabled = Template.bind({});
Enabled.args = {
  title: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Button',
  disabled: true,
};
