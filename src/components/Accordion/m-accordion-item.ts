/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { boxLayout, stackLayout } from '@helpers/layouts';
import { accordionItemStyles } from './accordion-item-styles';

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  @property({ type: Boolean })
  border = false;

  static styles = [stackLayout, boxLayout, accordionItemStyles];

  render() {
    const { border } = this;

    const classes = {
      'm-accordion-item': true,
      'm-box': true,
      'm-border--line': border,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="m-stack">
          <slot name="title"></slot>
          <slot name="content"></slot>
        </div>
        <m-button>
          <p slot="button-content">Toggle</p>
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
