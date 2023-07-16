/** @format */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionItemStyles } from './accordion-item-styles';
import {
  borderLine,
  borderNarrow,
  borderStandard,
  borderWide,
  borderJumbo,
  borderPrimary,
  borderSecondary,
  borderLight,
  borderDark,
} from '@helpers/borders';

export const BorderColor = {
  Primary: 'primary',
  Secondary: 'secondary',
  Light: 'light',
  Dark: 'dark',
} as const;

export const BorderWeight = {
  Line: 'line',
  Narrow: 'narrow',
  Standard: 'standard',
  Wide: 'wide',
  Jumbo: 'jumbo',
} as const;

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  @state()
  protected _open = true;

  @property({ type: Array, attribute: false })
  item = [
    {
      itemTitle: 'Item Title',
      itemContent: 'Item Content',
    },
  ];
  @property({ type: Boolean })
  border = false;
  @property({ type: String })
  borderColor = 'primary';
  @property({ type: String })
  borderWeight = 'standard';
  @property({ attribute: false })
  onClick = () => {
    return this.fold();
  };

  static styles = [
    stackLayout,
    borderLine,
    borderNarrow,
    borderStandard,
    borderWide,
    borderJumbo,
    borderPrimary,
    borderSecondary,
    borderLight,
    borderDark,
    accordionItemStyles,
  ];

  fold() {
    this._open = !this._open;
  }

  render() {
    const { item, _open } = this;
    console.log(item);

    const classes = {
      'm-accordion-item': true,
      'm-accordion-item--border': this.border,
      [`border-${this.borderColor}`]: this.border ? this.borderColor : false,
      [`border-${this.borderWeight}`]: this.border ? this.borderWeight : false,
    };

    return html`
      <div
        class="${classMap(classes)}"
        ?border="${this.border}"
        borderColor="${this.borderColor}"
        borderWeight="${this.borderWeight}"
      >
        <div class="m-stack">
          ${map(
            item,
            (i) => html`
              <h3>${i.itemTitle}</h3>
              <p>${_open ? i.itemContent : nothing}</p>
            `
          )}
        </div>
        <div>
          <m-button buttonSize="lg" style="width: 8em" @click=${this.onClick}>
            <span slot="button-content">${this._open ? 'close' : 'open'}</span>
          </m-button>
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
