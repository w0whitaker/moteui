import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  render() {
    return html`
      <div>
        <slot name="item"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion': MAccordion;
  }
}
