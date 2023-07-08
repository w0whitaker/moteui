/** @format */

import { css } from 'lit';

export const accordionStyles = css`
  :host {
    display: block;
  }

  .m-accordion > ::slotted(*:not(:first-child)) {
    margin-block-start: 0.125rem;
  }
`;
