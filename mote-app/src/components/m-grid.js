import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Grid container.
 *
 * @slot - This element has a slot
 */
export class MGrid extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = {};
  }

  render() {
    const classes = {
      'm-grid': true,
      [`m-grid--${this.variant}`]: this.variant,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .m-grid {
        display: grid;
        gap: 1rem;
        grid-template-rows: minmax(150px, auto);
      }

      .m-grid--side-by-side {
        grid-template-columns: 1fr 1fr;
      }

      @media all and (min-width: 40rem) {
        .m-grid--2up {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media all and (min-width: 50rem) {
        .m-grid--1-to-3up {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }

      .m-grid--fit {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    `;
  }
}

window.customElements.define('m-grid', MGrid);
