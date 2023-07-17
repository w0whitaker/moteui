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
  items = [];

  static styles = [stackLayout, accordionStyles];

  render() {
    const { items } = this;

    const itemTemplates = [];

    for (const item of Object.entries(items)) {
      const i = item[1];
      console.log(i);
      const template = html` <m-accordion-item
        .item=${item[i]}
      ></m-accordion-item>`;
      // console.log(template);
      // itemTemplates.push(i);
      itemTemplates.push(template);
    }

    const classes = {
      'm-accordion': true,
    };

    return html` <!-- display: block -->
      <div class="${classMap(classes)}">${itemTemplates}</div>`;
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
