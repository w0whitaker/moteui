/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: flex;
    justify-content: space-between;
    padding-inline: var(--space-s, 1rem);
    padding-block: var(--space-m, 1.5rem);
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    border-color: var(--dark, #00171f);
    background-color: var(--light, #e6ebff);
    box-shadow: -1px 1px var(--light, #e6ebff), -6px 4px var(--dark, #00171f);
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
