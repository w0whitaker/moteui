import { LitElement, html } from 'lit';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */

export class MAccordion extends LitElement {
  render() {
    return html`
      <div>
        <slot name="item"></slot>
      </div>
    `;
  }
}
