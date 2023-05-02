import type { Meta, StoryObj } from '@storybook/web-components';

import 'src/components/List/m-list.ts';
import '.storybook/main.css';

const meta: Meta = {
  title: 'Components/List',
  component: 'm-list',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
};
