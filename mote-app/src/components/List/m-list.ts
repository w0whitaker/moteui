import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('m-list')
export class MList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-list': MList;
  }
}
