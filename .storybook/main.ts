// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

//   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],

//   framework: {
//     name: '@storybook/vue3-vite',
//     options: {},
//   },
//   core: {
//     builder: '@storybook/builder-vite',
//   },

//   docs: {
//     autodocs: true,
//   },
// };

import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/vue3-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
