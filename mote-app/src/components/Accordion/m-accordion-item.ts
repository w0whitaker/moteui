import { LitElement, html } from 'lit';

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

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
window.customElements.define('m-accordion-item', MAccordionItem);
