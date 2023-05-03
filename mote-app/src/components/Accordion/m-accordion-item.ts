import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { boxLayout, stackLayout } from '@helpers/layouts';
import { line } from '@helpers/borders';

/**
 *
 * The Accordion item element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion-item')
export class MAccordionItem extends LitElement {
  static styles = [
    stackLayout,
    boxLayout,
    line,
    css`
      :host {
        display: block;
      }

      button {
        border: none;
        background-color: var(--secondary, lightgray);
        padding-inline: 2rem;
        border-left: 1px solid black;
      }

      .m-accordion-item {
        padding-inline-start: var(--space-s, 1rem);
        display: flex;
        justify-content: space-between;
      }
    `
  ];
  render() {
    const classes = {
      'm-accordion-item': true,
      'm-box': true,
      'm-border--line': true,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="m-stack">
          <slot name="title"></slot>
          <slot name="content"></slot>
        </div>
        <button>Toggle</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-accordion-item': MAccordionItem;
  }
}
