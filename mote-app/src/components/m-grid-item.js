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
    let option;
    switch (this.padding) {
      case 'none':
        option = 0;
        break;
      case 'scant':
        option = 'var(--space-3xs)';
        break;
      case 'narrow':
        option = 'var(--space-s)';
        break;
      case 'standard':
        option = 'var(--space-m)';
        break;
      case 'wide':
        option = 'var(--space-l)';
        break;
      case 'jumbo':
        option = 'var(--space-2xl)';
        break;
      default:
        option = '1rem';
    }
    this.style.setProperty('--padding', option);
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
