import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { boxLayout, stackLayout } from '@helpers/layouts';

@customElement('m-modal')
export class MModal extends LitElement {
  @property({ reflect: true })
  text: string;

  constructor() {
    super();
    this.text = 'Modal';
  }

  static styles = [
    stackLayout,
    boxLayout,
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    const { text } = this;
    const classes = {
      'm-box': true,
      'm-modal': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <div class="m-stack">
          <slot name="text">${text}</slot>
          <slot name="button"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-modal': MModal;
  }
}
