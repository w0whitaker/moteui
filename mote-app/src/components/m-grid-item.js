import { LitElement, css, html } from 'lit';

/**
 * Grid child items.
 *
 * @slot - This element has a slot
 */
export class MGridItem extends LitElement {
  static get properties() {
    return {
      padding: { type: String },
    };
  }

  constructor() {
    super();
    this.padding = {};
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        background-color: crimson;
      }

      .m-grid-item {
        padding: var(--padding);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--padding', this.padding);
  }

  render() {
    return html`
      <div class="m-grid-item">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('m-grid-item', MGridItem);
