import { LitElement } from 'lit';
export declare class MInput extends LitElement {
  name: string;
  static styles: import('lit').CSSResult[];
  constructor();
  render(): import('lit-html').TemplateResult<1>;
}
declare global {
  interface HTMLElementTagNameMap {
    'm-input': MInput;
  }
}
