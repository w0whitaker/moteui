import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { boxLayout, stackLayout } from '@helpers/index';

@customElement('m-list')
export class MList extends LitElement {
  @property({ reflect: true })
  items = [];

  static styles = [
    boxLayout,
    stackLayout,
    css`
      :host {
        display: block;
      }

      .m-list {
        list-style: none;
      }
    `,
  ];

  render() {
    const classes = {
      'm-list': true,
      'm-stack': true,
    };

    return html`
      <ul class="${classMap(classes)}">${this.items.map((i) => 
        html`
        <li class="m-box">${i}</li>
        `)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-list': MList;
  }
}
