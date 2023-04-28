import { LitElement, html, css } from 'lit';
import '../Box/m-box.js';

export class MModal extends LitElement {
  static get properties() {
    return {
      text: { type: String },
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
    return html`
      <m-box border padding="narrow">
        <div slot="content">
          <p>${this.text}</p>
        </div>
      </m-box>
    `;
  }
}

customElements.define('m-modal', MModal);
