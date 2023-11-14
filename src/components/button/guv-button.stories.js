/* eslint-disable @typescript-eslint/explicit-function-return-type */
import GuvButton from './guv-button.vue';

export default {
  title: 'Example/Button',
  component: GuvButton,
  argTypes: {
    title: {
      type: 'string',
      control: 'text',
      value: 'Button',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onClick: {
      description: 'emitted "click": MouseEvent',
      control: '() => void',
    },
  },
};

const Template = (args) => ({
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
