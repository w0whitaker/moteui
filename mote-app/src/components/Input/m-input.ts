import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { stackLayout } from '@helpers/layouts';
import '.storybook/main.css';

/**
 * The Input element.
 */

@customElement('m-input')
export class MInput extends LitElement {
  @property({ reflect: true })
  name = '';

  constructor() {
    super();
    this.name = 'enter';
  }

  static styles = [
    stackLayout,
    css`
      :host {
        display: block;
      }

      .m-input {
        border: 1px solid black;
        padding-block: var(--space-s, 1.125rem);
        padding-inline: var(--space-m, 3.375ch);
      }
    `,
  ];

  render() {
    const { name } = this;

    const classes = {
      'm-input': true,
      'm-stack': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <label for="${name}">${name}</label>
        <input type="text" id="${name}" name="${name}" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-input': MInput;
  }
}
