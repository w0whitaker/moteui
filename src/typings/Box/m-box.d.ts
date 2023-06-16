/**
 * The Box element.
 *
 * @slot - This element has a slot
 *
 */
import { LitElement } from 'lit';
export declare class MBox extends LitElement {
    border: boolean;
    padding: string;
    thickness: string;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'm-box': MBox;
    }
}
