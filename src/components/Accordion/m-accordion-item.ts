/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionItemStyles } from './accordion-item-styles';
import {
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
  borderColor = 'light';

  static styles = [
    stackLayout,
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
      [`border-${this.borderColor}`]: this.borderColor,
    };

    return html`
      <div
        class="${classMap(classes)}"
        ?border="${this.border}"
        borderColor="${this.borderColor}"
      >
        <div class="m-stack">
          <slot name="title">
            <p>${this.itemTitle}</p>
          </slot>
          <slot name="content">
            <p>${this.itemContent}</p>
          </slot>
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
