/** @format */

import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionStyles } from './accordion-styles';
import { Light, Dark, Primary, Secondary } from '@themes/index';

/**
 * The Accordion element.
 *
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  @state()
  _items = new Map();
  @state()
  item = [];
  /** 'Light' || 'Dark' || 'Primary' || 'Secondary' */
  @property({ type: String })
  theme = 'Primary';

  static styles = [
    stackLayout,
    accordionStyles,
    Light,
    Dark,
    Primary,
    Secondary,
  ];

  render() {
    const { _items, theme } = this;

    const parentClasses = {
      'm-accordion': true,
      'm-stack': true,
    };

    const childClasses = {
      'm-accordion-item': false,
      [`${theme.toLowerCase()}-theme`]: true,
    };

    return html` <!-- display: block -->
      <div class="${classMap(parentClasses)}">
        ${map(
          _items,
          (item) => html`<!-- display:block -->
            <m-accordion-item
              .item="${item}"
              class="${classMap(childClasses)}"
            ></m-accordion-item>`
        )}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion': MAccordion;
  }
}
