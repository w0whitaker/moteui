/** @format */

import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
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
  /** 'Light' || 'Dark' || 'Primary' || 'Secondary' */
  @property({ attribute: false })
  theme = '';
  @property({ attribute: false })
  onClick = () => {
    return this.fold();
  };

  static styles = [stackLayout, accordionItemStyles];

  fold() {
    this._open = !this._open;
  }

  render() {
    const { _open, theme } = this;

    const classes = {
      'm-accordion-item': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <div class="row">
          <header>
            <h3>${this.item[0]}</h3>
            <m-button buttonSize="sm" @click=${this.onClick} theme="${theme}">
              <span slot="button-content">${_open ? 'close' : 'open'}</span>
            </m-button>
          </header>
        </div>
        ${_open
          ? html` <div class="row">
              <p>${this.item[1]}</p>
            </div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
