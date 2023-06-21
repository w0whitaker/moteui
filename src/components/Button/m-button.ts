import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/*
enum ButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}
*/
/**
 * The Button element.
 */

@customElement('m-button')
export class MButton extends LitElement {
  @property({ type: String })
  buttonText = '';

  constructor() {
    super();
    this.buttonText = 'Button';
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
        position: relative;
        font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.5rem;
        color: #E6EBFF;
      }

      .m-button:after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }

      .m-button--sm {
        width: 4em;
      }

      .m-button--md {
        width: 6em;
        background-color: magenta;
      }

      .m-button--lg {
        width: 8em;
        background-color: yellow;
      }
    `
  ];


  render() {
    const { buttonSize } = this;

    const classes = {
      'm-button': true,
      [`m-button--${buttonSize}`]: true,
    };

    return html`
      <button size="${this.buttonSize}">${this.buttonText}--${this.buttonSize}</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
