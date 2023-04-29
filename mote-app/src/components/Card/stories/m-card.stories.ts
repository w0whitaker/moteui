import { html } from 'lit';
import './m-card.js';

export default {
  title: 'Components/Card',
  component: 'MCard',
};

export const Primary = {
  render: () => html`
    <m-card>
      <div slot="content">
        <h3>Card</h3>
        <p>Card content</p>
      </div>
    </m-card>
  `,
};
