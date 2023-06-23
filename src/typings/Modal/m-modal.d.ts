import { LitElement } from 'lit';
import '../Box/m-box.js';
export declare class MModal extends LitElement {
  text: string;
  constructor();
  static styles: import('lit').CSSResult[];
  render(): import('lit-html').TemplateResult<1>;
}
declare global {
  interface HTMLElementTagNameMap {
    'm-modal': MModal;
  }
}
