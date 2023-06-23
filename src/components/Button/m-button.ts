import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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

  static styles = css`
    /* https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
    :host {
      display: block;
    }

    .m-button {
      border-style: solid;
      border-width: 0.375em;
      border-color: #e6ebff;
      border-radius: 0.25em;
      padding: 0;
      background-color: #00171f;
      position: relative;
      font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      color: #e6ebff;
    }

    .m-button:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    .m-button--sm {
      width: 50%;
      font-size: 1em;
    }

    .m-button--md {
      width: 75%;
      font-size: 1.5em;
    }

    .m-button--lg {
      width: 100%;
      font-size: 1.75em;
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
      color: #e6ebff;
    }

    .m-button[disabled] {
      /* filter: brightness(0.5); */
      filter: invert(25%);
    }

    .m-button[disabled] > * {
      text-decoration: underline;
      text-underline-offset: -0.3em;
      text-decoration-skip-ink: none;
      /* text-decoration: line-through; */
    }
  `;

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
