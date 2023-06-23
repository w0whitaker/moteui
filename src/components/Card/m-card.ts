import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { boxLayout } from '@helpers/layouts';
import { classMap } from 'lit/directives/class-map.js';

@customElement('m-card')
export class MCard extends LitElement {
  static styles = [
    boxLayout,
    css`
      :host {
        display: block;
      }

      .m-box {
        padding-block: var(--space-s, 1.125rem);
        padding-inline: var(--space-m, 3.375ch);
      }

      ::slotted([slot='title']) {
        padding-block: var(--space-s, 1.125rem);
        padding-inline: var(--space-m, 3.375ch);
        background-color: var(--secondary, lightgray);
      }
    `,
  ];

  render() {
    const classes = {
      'm-box': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-card': MCard;
  }
}
