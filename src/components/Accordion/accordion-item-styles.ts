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
    border-width: 2px;
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
    padding-block: var(--space-xs, 0.75rem);
    padding-inline: var(--space-m, 1.5rem);
  }

  .bottom {
    margin-inline: 2px;
    margin-block-end: 2px;
    border-radius: 0.25em;
    background-color: var(--light, #e6ebff);
    color: var(--dark, #00171f);
  }
`;
