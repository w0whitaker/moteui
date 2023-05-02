import type { Meta, StoryObj } from '@storybook/web-components';

import 'src/components/Input/m-input';
import '.storybook/main.css';

const meta: Meta = {
  title: 'Components/Input',
  component: 'm-input',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'enter',
  },
};
