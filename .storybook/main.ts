/** @format */

import type { StorybookConfig } from '@storybook/web-components-vite';
const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../src/components/**/*.stories.ts', '../src/components/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
};
export default config;
