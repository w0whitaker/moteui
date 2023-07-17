/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
  // This is an array of 'MAccordionItem' objects
  @property({ type: Array, attribute: false })
  items = [];

  static styles = [stackLayout, accordionStyles];

  render() {
    const { items } = this;
    const itemTemplates = [];

    for (const i in items) {
      itemTemplates.push(
        html` <m-accordion-item .item=${items}></m-accordion-item> `
      );
      console.log(items[i]);
    }

    const classes = {
      'm-accordion': true,
    };

    return html` <div class="${classMap(classes)}">${itemTemplates}</div>`;
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
