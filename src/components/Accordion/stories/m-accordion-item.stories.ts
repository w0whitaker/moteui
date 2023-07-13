/** @format */

import type { Meta, StoryObj } from '@storybook/web-components';

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

export const Default: Story = {
  args: {
    border: true,
    borderColor: 'primary',
    borderWeight: 'standard',
    itemContent: 'My name is Sherlock Holmes.',
    itemTitle: 'Sherlock Holmes',
    buttonText: 'Click me!',
  },
};
