/** @format */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { buttonStyles } from './button-styles';
import {
  borderPrimary,
  borderSecondary,
  borderLight,
  borderDark,
} from '@helpers/borders';

export const BorderColor = {
  Primary: 'primary',
  Secondary: 'secondary',
  Light: 'light',
  Dark: 'dark',
} as const;

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
  @property({ type: String })
  borderColor = 'light';
  @property({ type: Boolean })
  disabled = false;
  @property({ attribute: false })
  onClick = () => {
    return;
  };

  static styles = [
    buttonStyles,
    borderPrimary,
    borderSecondary,
    borderLight,
    borderDark,
  ];

  render() {
    const { borderColor } = this;
    const classes = {
      'm-button': true,
      [`m-button--${this.buttonSize}`]: true,
      [`border-${borderColor}`]: borderColor,
    };

    return html`
      <button
        class="${classMap(classes)}"
        size="${this.buttonSize}"
        border-color="${this.borderColor}"
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
