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

    const parentClasses = {
      'm-accordion-item': true,
    };

    const classes = {
      bottom: _open ? true : false,
    };

    return html`
      <div class="${classMap(parentClasses)}">
        <div class="top">
          <h3>${this.item[0]}</h3>
          <m-button buttonSize="sm" @click=${this.onClick}>
            <span slot="button-content">${_open ? 'close' : 'open'}</span>
          </m-button>
        </div>
        <div class="${classMap(classes)}">
          <p>${_open ? html`${this.item[1]}` : nothing}</p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
