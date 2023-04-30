import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { stackLayout } from '../Stack/m-stack';

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  static styles = [
    stackLayout,
  ];
/** simplify this markup */
  render() {
    return html`
      <div class="m-stack">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
