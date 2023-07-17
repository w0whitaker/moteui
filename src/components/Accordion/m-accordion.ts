/** @format */

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionStyles } from './accordion-styles';

/**
 * The Accordion element.
 *
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  @state()
  items = new Set([]);

  static styles = [stackLayout, accordionStyles];

  render() {
    const { items } = this;
    const itemTemplate = html`<!-- display: block -->
    <m-accordion-item
    `;

    const k = Object.keys(items);
    for (const i of k) {
      const mai = items[i];
      console.log(mai);
    }

    const classes = {
      'm-accordion': true,
    };

    return html` <!-- display: block -->
      <div class="${classMap(classes)}">
        ${html`<!-- display:block -->
          <p>${this.mai}</p> `}
      </div>`;
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
