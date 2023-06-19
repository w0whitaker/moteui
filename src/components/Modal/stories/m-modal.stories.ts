import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import 'src/components/Modal/m-modal';
import 'src/components/Button/m-button';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'm-modal',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <m-modal text="${args.text}">
      <p>message: ${args.text}</p>
      <m-button slot="button" label="OK"></m-button>
    </m-modal>
  `,
  args: {
    text: 'Modal',
  },
};
