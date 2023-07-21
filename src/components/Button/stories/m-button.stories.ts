/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-button';
import { Sizes } from '../m-button';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
  tags: ['autodocs'],
  argTypes: {
    buttonSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    theme: {
      options: ['Light', 'Dark', 'Primary', 'Secondary'],
      control: { type: 'select' },
    },
    borderColor: {
      options: ['primary', 'secondary', 'light', 'dark'],
      control: { type: 'select' },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj;

/** A generic button has no assigned action, and can be adapted for multiple uses. */
export const Generic: Story = {
  args: {
    theme: 'Light',
    square: false,
    disabled: false,
    buttonSize: Sizes.Medium,
    buttonText: 'Click me!',
    borderColor: 'light',
    onClick: action('clicked'),
  },
};
