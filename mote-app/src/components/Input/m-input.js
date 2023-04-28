import { LitElement, html, css } from 'lit';

export class MInput extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    const { name } = this;

    return html`
      <label for="${name}">${name}</label>
      <input type="text" id="${name}" name="${name}" />
    `;
  }
}

customElements.define('m-input', MInput);
