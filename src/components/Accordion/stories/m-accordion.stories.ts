/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-accordion';
import '../m-accordion-item';
import '../../Button/m-button';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'm-accordion',
  tags: ['autodocs'],
  argTypes: {
    border: {
      control: { type: 'boolean' },
    },
    borderColor: {
      options: ['primary', 'secondary', 'light', 'dark'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <m-accordion>
      <m-accordion-item ?border=${args.border} borderColor=${args.borderColor}>
        <p slot="title">Sherlock Holmes</p>
        <p slot="content">
          My name is Sherlock Holmes. It is my business to know what other
          people don't know.
        </p>
        <m-button slot="actions" buttonSize="lg" style="width: 8em">
          <span slot="button-content">${args.buttonText}</span>
        </m-button>
      </m-accordion-item>
      <m-accordion-item ?border=${args.border} borderColor=${args.borderColor}>
        <p slot="title">Dr. Watson</p>
        <p slot="content">
          You have a grand gift for silence, Watson. It makes you quite
          invaluable as a companion.
        </p>
        <m-button slot="actions" buttonSize="lg" style="width: 8em">
          <span slot="button-content">${args.buttonText}</span>
        </m-button>
      </m-accordion-item>
      <m-accordion-item ?border=${args.border} borderColor=${args.borderColor}>
        <p slot="title">Matlock</p>
        <p slot="content">I'm not a magician, I'm just a country lawyer.</p>
        <m-button slot="actions" buttonSize="lg" style="width: 8em">
          <span slot="button-content">${args.buttonText}</span>
        </m-button>
      </m-accordion-item>
    </m-accordion>
  `,
  args: {
    border: true,
    buttonText: 'expand',
    borderColor: 'primary',
  },
};
