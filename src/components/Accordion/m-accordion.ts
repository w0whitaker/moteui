/** @format */

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
// import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
// import { stackLayout } from '@helpers/layouts';
// import { accordionStyles } from './accordion-styles';
// import { MAccordionItem } from './m-accordion-item';

/**
 * The Accordion element.
 *
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  @state()
  _items = new Map([
    ['Sherlock Holmes', 'detective'],
    ['John Watson', 'doctor'],
    ['Mycroft Holmes', 'government'],
  ]);
  render() {
    return html` <!-- display: block -->
      <div>
        <h1>Accordion</h1>
          ${map(
            this._items,
            (_item) => html`<!-- display:block -->
              <m-accordion-item ._item=${_item}></m-accordion-item>`
          )}
        </ul>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion': MAccordion;
  }
}
