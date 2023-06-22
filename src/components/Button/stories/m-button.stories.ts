import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-button';
import { Sizes } from '../m-button';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
  decorators: [(story) => html`<div style="width: 200px; margin: 2em auto;">${story()}</div>`],
  argTypes: {
    buttonSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    onClick: {
      table: {
        disable: true,
      }
    },
    disabled: {
      control: { type: 'boolean' },
    }
  }
};

export default meta;

type Story = StoryObj;


export const Generic: Story = {
  args: {
    disabled: false,
    buttonSize: Sizes.Large,
    buttonText: 'Click me!',
    onClick: action('clicked')
  },
};