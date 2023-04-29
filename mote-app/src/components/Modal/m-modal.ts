import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../Box/m-box.js';

@customElement('m-modal')
export class MModal extends LitElement {
  text: string;

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

declare global {
  interface HTMLElementTagNameMap {
    'm-modal': MModal;
  }
}
