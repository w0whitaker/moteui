import { LitElement } from 'lit';
import '../Box/m-box.js';
export declare class MCard extends LitElement {
    shadow: boolean;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'm-card': MCard;
    }
}
