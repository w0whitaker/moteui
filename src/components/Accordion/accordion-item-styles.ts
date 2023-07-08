/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
  }

  .m-accordion-item {
    padding-inline-start: var(--space-s, 1rem);
    display: flex;
    justify-content: space-between;
  }

  .m-accordion-item--border {
    border-style: solid;
    border-width: 0.375em;
    border-color: #e6ebff;
    border-radius: 0.25em;
  }
`;
