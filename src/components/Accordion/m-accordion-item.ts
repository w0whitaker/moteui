/** @format */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stackLayout } from '@helpers/layouts';
import { accordionItemStyles } from './accordion-item-styles';

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

  static styles = [stackLayout, accordionItemStyles];

  fold() {
    this._open = !this._open;
  }

  render() {
    const { _open } = this;

    return html`
      <div class="m-accordion-item--content">
        <h3>${this.item[0]}</h3>
        <p>${_open ? html`${this.item[1]}` : nothing}</p>
      </div>
      <div class="m-accordion-item--button">
        <m-button buttonSize="sm" square @click=${this.onClick}>
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
