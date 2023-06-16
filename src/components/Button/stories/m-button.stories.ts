import type { Meta, StoryObj } from '@storybook/web-components';

import 'src/components/Button/m-button';
import '.storybook/main.css';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
};

export default meta;

type Story = StoryObj;

export const Generic: Story = {
  args: {
    buttonText: 'Click me!',
    disabled: false,
  },
};

export const Submit: Story = {
  args: {
    buttonText: 'Submit',
    disabled: false,
  },
};
