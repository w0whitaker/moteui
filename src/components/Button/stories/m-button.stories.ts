import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import '../m-button';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
};

export default meta;

type Story = StoryObj;


export const Generic: Story = {
  args: {
    buttonText: 'from storybook',
    buttonSize: 'lg',
  },
};