/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
    border-radius: 0.25em;
  }

  h3,
  p {
    padding: 0;
    margin: 0;
  }

  m-button {
    /* this padding-block-end squeezes the button's box-shadow into this container */
    padding-block-end: 4px;
    /* ditto for this padding-inline-start */
    padding-inline-start: 6px;
  }

  .m-accordion-item {
    border-style: solid;
    border-left-width: var(--space-s, 1rem);
    border-right-width: var(--space-s, 1rem);
    border-bottom-width: var(--space-3xs, 0.25rem);
    border-radius: 0.25em;
    border-color: inherit;
    background-color: inherit;
    box-shadow: -1px 1px var(--light, #e6ebff);
  }

  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .top,
  .bottom {
    padding-block: var(--space-3xs, 0.25rem);
    padding-inline-start: var(--space-m, 1.5rem);
    padding-inline-end: var(--space-3xs, 0.25rem);
  }

  .bottom {
    background-color: var(--light, #e6ebff);
    color: var(--dark, #00171f);
  }
`;
