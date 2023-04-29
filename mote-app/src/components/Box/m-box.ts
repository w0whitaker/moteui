/**
 * The Box element.
 *
 * @slot - This element has a slot
 *
 */
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('m-box')
export class MBox extends LitElement {
  border: boolean;
  padding: string;
  thickness: string;

  constructor() {
    super();
    this.border = false;
    this.padding = 'none';
    this.thickness = 'thin';
  }

  render() {
    const classes = {
      'm-box': true,
      border: this.border,
      [`m-box-border--${this.thickness}`]: true,
      [`m-box-padding--${this.padding}`]: true,
    };

    return html`
      <div ?border=${this.border} class=${classMap(classes)}>
        <slot name="content"></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .border {
        border-style: solid;
      }

      .m-box {
        max-width: fit-content;
      }

      .m-box-padding--none {
        padding: 0;
      }

      .m-box-padding--scant {
        padding: var(--space-3xs, 0.25rem);
      }

      .m-box-padding--narrow {
        padding: var(--space-s, 1rem);
      }

      .m-box-padding--standard {
        padding: var(--space-m, 1.5rem);
      }

      .m-box-padding--wide {
        padding: var(--space-l, 2rem);
      }

      .m-box-padding--jumbo {
        padding: var(--space-2xl, 4rem);
      }

      .m-box-border--thin {
        border-width: calc(var(--step--2, 00.44rem) / 4);
      }

      .m-box-border--medium {
        border-width: calc(var(--step--2, 0.44rem) / 2);
      }

      .m-box-border--thick {
        border-width: var(--step--1, 0.67rem);
      }

      .m-box-border--heavy {
        border-width: var(--step-0, 1rem);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-box': MBox;
  }
}
