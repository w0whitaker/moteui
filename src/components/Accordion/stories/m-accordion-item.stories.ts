/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion Item',
  component: 'm-accordion-item',
  tags: ['autodocs'],
  argTypes: {
    border: {
      control: { type: 'boolean' },
    },
    borderColor: {
      options: ['primary', 'secondary', 'light', 'dark'],
      control: { type: 'select' },
    },
    borderWeight: {
      options: ['line', 'narrow', 'standard', 'wide', 'jumbo'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Sherlock: Story = {
  args: {
    border: true,
    borderColor: 'primary',
    borderWeight: 'standard',
    itemTitle: html` <h3>Sherlock Holmes</h3> `,
    itemContent: html`
      <p>
        "My name is Sherlock Holmes. It is my business to know what other people
        don't know."
      </p>
    `,
    buttonText: 'Click me!',
  },
};
