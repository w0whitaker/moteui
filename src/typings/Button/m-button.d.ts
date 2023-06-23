import { LitElement } from 'lit';
/**
 * The Button element.
 */
export declare class MButton extends LitElement {
  label: string;
  constructor();
  render(): import('lit-html').TemplateResult<1>;
}
declare global {
  interface HTMLElementTagNameMap {
    'm-button': MButton;
  }
}
