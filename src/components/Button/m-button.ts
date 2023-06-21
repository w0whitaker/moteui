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
  buttonText = 'Button';
  @property({ type: String })
  buttonSize = '';

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
        padding: 0;
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
      }

      .m-button--lg {
        width: 8em;
      }

      .m-button--content {
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
    `;


  render() {
    const classes = {
      'm-button': true,
      [`m-button--${this.buttonSize}`]: true,
    };

    return html`
      <button class="${classMap(classes)}" size="${this.buttonSize}">
        <slot name="button-content" class="m-button--content">${this.buttonText}</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
