import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * The Button element.
 */

@customElement('m-button')
export class MButton extends LitElement {
  @property({ type: String })
  label = '';

  constructor() {
    super();
    this.label = 'Button';
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
    const { label } = this;
    const classes = {
      'm-button': true,
    };

    return html`
      <button class="${classMap(classes)}">${label}</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
