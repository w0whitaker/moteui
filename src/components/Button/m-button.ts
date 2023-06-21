import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/**
 * The Button element.
 */
@customElement('m-button')
export class MButton extends LitElement {
  @property()
  buttonText = 'Button';
  @property()
  buttonSize = 'md';

  static styles = [
    css`
      :host {
        display: block;
      }

      button {
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

      button:after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }

      button[size='sm'] {
        width: 4em;
      }

      button[size='md'] {
        width: 6em;
      }

      button[size='lg'] {
        width: 8em;
      }
    `
  ];


  render() {
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
