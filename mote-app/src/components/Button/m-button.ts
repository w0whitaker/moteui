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
      border-style: solid;
      border-width: 0.375em;
      border-color: #00171F;
      border-radius: 0.25em;
      background-color: #E6EBFF;
      width: 8em;
      position: relative;
    }

    .m-button:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    .button-content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
    }
  `;

  render() {
    const { buttonText } = this;
    const { disabled } = this;
    const classes = {
      'm-button': true,
    };

    return html`
      <button class="${classMap(classes)}" ?disabled=${disabled}>
      <span class="button-content">${buttonText}</span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
