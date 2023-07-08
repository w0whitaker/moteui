/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { accordionStyles } from './accordion-styles';
import { ACCORDION_SIZE } from './defs';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  @property({ reflect: true })
  size = ACCORDION_SIZE.MEDIUM;

  static styles = [accordionStyles];

  render() {
    const classes = {
      'm-accordion': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'list');
    }
    super.connectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion': MAccordion;
  }
}
