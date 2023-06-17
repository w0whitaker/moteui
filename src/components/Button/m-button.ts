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
  // button type: submit, reset, button
  @property({ type: String })
  buttonType = 'button';

  constructor() {
    super();
    this.buttonText = 'Button';
    this.disabled = false;
    this.buttonType = 'button';
  }

  static styles = css`
    /* https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
    :host {
      display: block;
    }

    .m-button {
      border-style: solid;
      border-width: 0.375em;
      border-color: #E6EBFF;
      border-radius: 0.25em;
      background-color: #00171F;
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
      color: #E6EBFF;
    }

    .disabled>span {
      text-decoration: line-through;
    }
  `;

  render() {
    const { buttonText } = this;
    const { disabled } = this;
    const { buttonType } = this;
    const classes = {
      'm-button': true,
      'disabled': disabled,
    };

    return html`
      <button class="${classMap(classes)}" ?disabled=${disabled} type="${buttonType}">
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
