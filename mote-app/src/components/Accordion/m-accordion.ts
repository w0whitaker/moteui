import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .m-accordion {
      display: flex;
      flex-direction: column;
      width: 100%;
      font-family: sans-serif;
    }
  `;

  render() {
    const classes = {
      'm-accordion': true,
    };
    return html`
      <div class="${classMap(classes)}">
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
