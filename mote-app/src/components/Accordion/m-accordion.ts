import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ACCORDION_SIZE } from './defs';
import { stackLayout } from '../Stack/m-stack';

/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */

@customElement('m-accordion')
export class MAccordion extends LitElement {
  @property({ reflect: true})
  size = ACCORDION_SIZE.MEDIUM;

  static styles = [
    stackLayout,
    css`
      :host {
        display: block;
      }
  `];

  render() {
    return html`
      <slot></slot>
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
