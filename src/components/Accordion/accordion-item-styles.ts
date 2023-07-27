/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: grid;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    box-shadow: -1px 1px var(--light, #e6ebff), -6px 4px var(--dark, #00171f);
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
`;
