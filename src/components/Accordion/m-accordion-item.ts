/** @format */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stackLayout } from '@helpers/layouts';

/**
 *
 * The Accordion item element.
 *
 * @slot button-content - The button content.
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  @state()
  protected _open = false;
  @state()
  item = [];
  @property({ attribute: false })
  onClick = () => {
    return this.fold();
  };

  static styles = [stackLayout];

  fold() {
    this._open = !this._open;
  }

  render() {
    const { _open } = this;

    return html`
      <div class="m-stack">
        <h3>${this.item[0]}</h3>
        <p>${_open ? html`${this.item[1]}` : nothing}</p>
      </div>
      <div>
        <m-button buttonSize="lg" style="width: 8em" @click=${this.onClick}>
          <span slot="button-content">${_open ? 'close' : 'open'}</span>
        </m-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
