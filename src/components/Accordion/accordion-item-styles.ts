/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    background-color: magenta;
    padding-inline: var(--space-s, 1rem);
    padding-block: var(--space-m, 1.5rem);
    display: flex;
    justify-content: space-between;
  }

  .m-accordion-item--content {
    flex-basis: auto;
  }

  .m-accordion-item--button {
    /* this padding-block-end squeezes the button's box-shadow into this container */
    padding-block-end: 4px;
    /* ditto for this padding-inline-start */
    padding-inline-start: 6px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: auto;
  }

  .m-accordion-item--border {
    border-style: solid;
    border-radius: 0.25em;
  }
`;
