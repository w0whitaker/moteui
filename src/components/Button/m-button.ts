/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { buttonStyles } from './button-styles';

export const Sizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
} as const;

/**
 * The Button element.
 */

@customElement('m-button')
export class MButton extends LitElement {
  /** Keep it short and use verbs. */
  @property({ type: String, attribute: false })
  buttonText = 'Button';
  /** 'sm' || 'md' || 'lg' */
  @property({ type: String })
  buttonSize = 'md';
  @property({ type: Boolean })
  disabled = false;
  @property({ attribute: false })
  onClick = () => {
    return;
  };

  static styles = [buttonStyles];

  render() {
    const classes = {
      'm-button': true,
      [`m-button--${this.buttonSize}`]: true,
    };

    return html`
      <button
        class="${classMap(classes)}"
        size="${this.buttonSize}"
        @click="${this.onClick}"
        ?disabled="${this.disabled}"
      >
        <slot name="button-content" class="m-button--content">
          <span>${this.buttonText}</span>
        </slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
