/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionItemStyles } from './accordion-item-styles';

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

  static styles = [stackLayout, accordionItemStyles];

  render() {
    const classes = {
      'm-accordion-item': true,
      'm-accordion-item--border': this.border,
    };
    return html`
      <div class="${classMap(classes)}" ?border="${this.border}">
        <div class="m-stack">
          <slot name="title">
            <p>${this.itemTitle}</p>
          </slot>
          <slot name="content">
            <p>${this.itemContent}</p>
          </slot>
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
