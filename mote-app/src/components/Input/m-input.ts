import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('m-input')
export class MInput extends LitElement {
  name: string;

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.name = 'Input';
  }

  render() {
    const { name } = this;

    return html`
      <label for="${name}">${name}</label>
      <input type="text" id="${name}" name="${name}" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-input': MInput;
  }
}
