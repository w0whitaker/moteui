/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';
import '../m-accordion';
import '../m-accordion-item';
import '../../Button/m-button';

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
    items: [
      {
        itemTitle: 'Sherlock Holmes',
        itemContent: 'My name is Sherlock Holmes.',
      },
      {
        itemTitle: 'John Watson',
        itemContent: 'My name is John Watson.',
      },
      {
        itemTitle: 'Mycroft Holmes',
        itemContent: 'My name is Mycroft Holmes.',
      },
    ],
  },
};
