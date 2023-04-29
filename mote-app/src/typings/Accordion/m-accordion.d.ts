import { LitElement } from 'lit';
/**
 * The Accordion element.
 *
 * @slot - This element has a slot
 */
export declare class MAccordion extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'm-accordion': MAccordion;
    }
}
