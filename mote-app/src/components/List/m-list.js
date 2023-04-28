import { LitElement, html, css } from 'lit';

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

customElements.define('m-list', MList);
