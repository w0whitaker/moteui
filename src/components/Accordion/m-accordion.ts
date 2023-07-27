/** @format */

import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { stackLayout } from '@helpers/layouts';
import { accordionStyles } from './accordion-styles';
import {
  borderLine,
  borderNarrow,
  borderStandard,
  borderWide,
  borderJumbo,
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

export const BorderWeight = {
  Line: 'line',
  Narrow: 'narrow',
  Standard: 'standard',
  Wide: 'wide',
  Jumbo: 'jumbo',
} as const;

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
  @property({ type: Boolean })
  border = false;
  @property({ type: String })
  borderColor = 'primary';
  @property({ type: String })
  borderWeight = 'standard';

  static styles = [
    stackLayout,
    accordionStyles,
    borderLine,
    borderNarrow,
    borderStandard,
    borderWide,
    borderJumbo,
    borderPrimary,
    borderSecondary,
    borderLight,
    borderDark,
  ];

  render() {
    const { _items, border, borderColor, borderWeight } = this;

    const parentClasses = {
      'm-accordion': true,
      'm-stack': true,
    };

    return html` <!-- display: block -->
      <div class="${classMap(parentClasses)}">
        ${map(
          _items,
          (item) => html`<!-- display:block -->
            <m-accordion-item
              .item="${item}"
              ?border="${border}"
              borderColor="${borderColor}"
              borderWeight="${borderWeight}"
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
