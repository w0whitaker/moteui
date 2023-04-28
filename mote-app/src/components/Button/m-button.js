import { LitElement, html } from 'lit';

/**
 * The Button element.
 *
 * @slot - This element has a slot
 */

export class MBox extends LitElement {
  render() {
    return html`
      <button>
        <slot name="label"></slot>
      </button>
    `;
  }
}
