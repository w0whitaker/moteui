import { LitElement, css, html } from 'lit';

/**
 * Grid child items.
 *
 * @slot - This element has a slot
 */
export class MGridItem extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .m-grid-item {
        display: flex;
      }
    `;
  }

  render() {
    return html`
      <div class="m-grid-item">
        <slot name="content"></slot>
      </div>
    `;
  }
}

window.customElements.define('m-grid-item', MGridItem);
