import { html } from 'lit';
import '../m-accordion.ts';
import '../m-accordion-item.ts';

export default {
  title: 'Components/Accordion',
  component: 'MAccordion',
};

export const Default = {
  render: () => html`
    <m-accordion>
      <m-accordion-item>
        <p slot="title">Sherlock Holmes</p>
        <p slot="content">
          My name is Sherlock Holmes. It is my business to know what other
          people don't know.
        </p>
      </m-accordion-item>
      <m-accordion-item>
        <p slot="title">Dr. Watson</p>
        <p slot="content">
          You have a grand gift for silence, Watson. It makes you quite
          invaluable as a companion.
        </p>
      </m-accordion-item>
      <m-accordion-item>
        <p slot="title">Matlock</p>
        <p slot="content">
          I'm not a magician, I'm just a country lawyer.
        </p>
      </m-accordion-item>
    </m-accordion>
  `,
};
