/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import { MAccordionItem } from '../m-accordion-item';
import { html } from 'lit';

const meta: Meta<MAccordionItem> = {
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

export const Default: Story = {
  args: {
    item: [
      {
        itemTitle: 'Sherlock Holmes',
        itemContent:
          "My name is Sherlock Holmes. It is my business to know what other people don't know.",
      },
    ],
    border: true,
    borderColor: 'primary',
    borderWeight: 'standard',
  },
};
