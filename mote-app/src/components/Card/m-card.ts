import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../helpers/Box/m-box.js';

@customElement('m-card')
export class MCard extends LitElement {
  shadow: boolean;

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

declare global {
  interface HTMLElementTagNameMap {
    'm-card': MCard;
  }
}
