import type { Meta } from '@storybook/web-components';
import '../m-button';

import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'm-button',
};

export default meta;


export const Generic = {
  args: {
    buttonText: 'Click me!',
  },
  render: (args: { buttonText: string; }) => html`
    <m-button>
      <p slot="button-content">${args.buttonText}</p>
    </m-button>
  `,
};