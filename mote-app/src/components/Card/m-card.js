import { LitElement, html } from 'lit';
import '../Box/m-box.js';

export class MCard extends LitElement {
  static get properties() {
    return {
      shadow: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.shadow = false;
  }

  render() {
    return html`
      <m-box border padding="wide">
        <div slot="content">
          <slot name="content"></slot>
        </div>
      </m-box>
    `;
  }
}

customElements.define('m-card', MCard);
