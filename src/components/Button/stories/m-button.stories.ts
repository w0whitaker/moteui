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
  decorators: [
    (story) => {
      return html` <div style="padding: 1em 6ch;">${story()}</div> `;
    },
  ],
  argTypes: {
    buttonSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    square: {
      control: { type: 'boolean' },
    },
    theme: {
      options: ['Light', 'Dark', 'Primary', 'Secondary'],
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
    square: true,
    disabled: false,
    buttonSize: Sizes.Medium,
    buttonText: 'Click me!',
    onClick: action('clicked'),
  },
};
