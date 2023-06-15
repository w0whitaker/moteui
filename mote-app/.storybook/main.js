/** @type { import('@storybook/web-components-vite').StorybookConfig } */

const config = {
  stories: ["../docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-docs", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
export default config;