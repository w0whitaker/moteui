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
    _items: {
      table: {
        disable: true,
      },
    },
    item: {
      table: {
        disable: true,
      },
    },
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
    _items: [
      [
        'Sherlock Holmes',
        "My name is Sherlock Holmes. It is my business to know what other people don't know.",
      ],
      [
        'Dr. Watson',
        'You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.',
      ],
      ['Matlock', "I'm not a magician, I'm just a country lawyer."],
    ],
    border: true,
  },
};
