import type { Meta, StoryObj } from '@storybook/web-components';

import 'src/components/Button/m-button';
import '.storybook/main.css';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  name: 'Generic',
  args: {
    buttonText: 'Click me!',
    disabled: false,
  },
};
