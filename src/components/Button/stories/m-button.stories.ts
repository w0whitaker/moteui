import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-button';
import { Sizes } from '../m-button';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
  decorators: [(story) => html`<div style="width: 200px">${story()}</div>`],
};

export default meta;

type Story = StoryObj;


export const Generic: Story = {
  args: {
    buttonSize: Sizes.Large,
    buttonText: 'from sb',
    onClick: action('clicked')
  },
};