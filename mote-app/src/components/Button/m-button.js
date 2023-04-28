import { LitElement, html } from 'lit';

/**
 * The Button element.
 */

export class MButton extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    };
  }

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

customElements.define('m-button', MButton);
