/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-accordion';
import '../m-accordion-item';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'm-accordion',
  tags: ['autodocs'],
  argTypes: {
    border: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <m-accordion>
      <m-accordion-item ?border=${args.border}>
        <p slot="title">Sherlock Holmes</p>
        <p slot="content">
          My name is Sherlock Holmes. It is my business to know what other
          people don't know.
        </p>
      </m-accordion-item>
      <m-accordion-item ?border=${args.border}>
        <p slot="title">Dr. Watson</p>
        <p slot="content">
          You have a grand gift for silence, Watson. It makes you quite
          invaluable as a companion.
        </p>
      </m-accordion-item>
      <m-accordion-item ?border=${args.border}>
        <p slot="title">Matlock</p>
        <p slot="content">I'm not a magician, I'm just a country lawyer.</p>
      </m-accordion-item>
    </m-accordion>
  `,
  args: {
    border: false,
  },
};
