import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-button';
// import { action } from '@storybook/addon-actions';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
};

export default meta;

type Story = StoryObj;


export const Generic: Story = {
  args: {
    buttonSize: 'md',
    buttonText: html`<p>from sb</p>`
  },
};