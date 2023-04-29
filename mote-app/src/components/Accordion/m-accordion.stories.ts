import { html } from 'lit';
import './m-accordion-item.js';

export default {
  title: 'Components/Accordion',
  component: 'm-accordion',
};

export const Default = {
  render: () => html`
    <m-accordion>
      <m-accordion-item slot="item">
        <div slot="title">Sherlock Holmes</div>
        <span slot="content">
          My name is Sherlock Holmes. It is my business to know what other
          people don't know.
        </span>
      </m-accordion-item>
      <m-accordion-item slot="item">
        <div slot="title">Dr. Watson</div>
        <span slot="content">
          You have a grand gift for silence, Watson. It makes you quite
          invaluable as a companion.
        </span>
      </m-accordion-item>
      <m-accordion-item slot="item">
        <div slot="title">Matlock</div>
        <span slot="content">
          I'm not a magician, I'm just a country lawyer.
        </span>
      </m-accordion-item>
    </m-accordion>
  `,
};
