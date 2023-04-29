import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  render() {
    return html`
      <details>
        <summary><slot name="title"></slot></summary>
        <p><slot name="content"></slot></p>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
