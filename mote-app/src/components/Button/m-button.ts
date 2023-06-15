import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * The Button element.
 */

@customElement('m-button')
export class MButton extends LitElement {
  @property({ type: String })
  buttonText = '';
  @property({ type: Boolean })
  disabled = false;

  constructor() {
    super();
    this.buttonText = 'Button';
  }

  static styles = css`
    :host {
      display: block;
    }

    .m-button {
      border: none;
      background-color: var(--secondary, lightgray);
      padding-block: var(--space-s, 1.125rem);
      padding-inline: var(--space-m, 3.375ch);
    }
  `;

  render() {
    const { buttonText } = this;
    const { disabled } = this;
    const classes = {
      'm-button': true,
    };

    return html`
      <button class="${classMap(classes)}" ?disabled=${disabled}>${buttonText}</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
