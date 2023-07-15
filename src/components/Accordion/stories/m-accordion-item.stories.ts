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
    item: {
      itemTitle: html`<h3>the title</h3>`,
      itemContent: html`<p>the content</p>`,
    },
    border: true,
    borderColor: 'primary',
    borderWeight: 'standard',
  },
};
