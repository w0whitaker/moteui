import type { Meta, StoryObj } from '@storybook/web-components';

import 'src/components/Button/m-button';
import { html } from 'lit';

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
  render: (args) => html`
    <m-button ${args.disabled}>
      <p slot="button-content">${args.buttonText}</p>
    </m-button>
  `,
};

export const Submit: Story = {
  args: {
    buttonText: 'Submit',
    disabled: false,
  },
};
