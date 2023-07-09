/** @format */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionStyles } from './accordion-styles';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 * just a dummy change
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  static styles = [stackLayout, accordionStyles];

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
