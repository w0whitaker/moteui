/** @format */

import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
  @property({ type: String, attribute: false })
  itemTitle = 'Accordion Item';
  @property({ type: String, attribute: false })
  itemContent = 'Accordion Item Content';
  @property({ type: Boolean })
  border = false;
  @property({ type: String })
  borderColor = 'primary';
  @property({ type: String })
  borderWeight = 'standard';
  @state()
  protected _open = false;

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

  render() {
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
          <slot name="title">
            <p>${this.itemTitle}</p>
          </slot>
          <slot name="content">
            <p>${this.itemContent}</p>
          </slot>
          <p>${this._open ? 'open' : 'closed'}</p>
        </div>
        <div>
          <slot name="actions"></slot>
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
