import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * The Button element.
 */

@customElement('m-button')
export class MButton extends LitElement {
  label: string;

  constructor() {
    super();
    this.label = 'Button';
  }

  render() {
    const { label } = this;

    return html`
      <div class="wrapper">
        <button>${label}</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
