import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import 'src/components/Card/m-card';
import '.storybook/main.css';

const meta: Meta = {
  title: 'Components/Card',
  component: 'm-card',
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`
    <m-card>
      <h3 slot="title">Card Title</h3>
      <p slot="content">When the commissionaire had gone, Holmes took up the stone and held it against the light. "It's a bonny thing," said he. "Just see how it glints and sparkles. Of course it is a nucleus and focus of crime. Every good stone is. They are the devil's pet baits. In the larger and older jewels every facet may stand for a bloody deed. This stone is not yet twenty years old. It was found in the banks of the Amoy River in southern China and is remarkable in having every characteristic of the carbuncle, save that it is blue in shade instead of ruby red. In spite of its youth, it has already a sinister history. There have been two murders, a vitriol-throwing, a suicide, and several robberies brought about for the sake of this forty-grain weight of crystallised charcoal. Who would think that so pretty a toy would be a purveyor to the gallows and the prison? I'll lock it up in my strong box now and drop a line to the Countess to say that we have it."</p>
    </m-card>
  `,
};
