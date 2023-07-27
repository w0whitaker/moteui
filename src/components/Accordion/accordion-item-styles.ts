/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: flex;
    justify-content: space-between;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    border-color: var(--dark, #00171f);
    background-color: var(--light, #e6ebff);
    box-shadow: -1px 1px var(--light, #e6ebff), -6px 4px var(--dark, #00171f);
  }

  h3,
  p {
    padding: 0;
    margin: 0;
  }

  .top {
    padding-block-end: 1.25rem;
    background-color: var(--dark, #00171f);
    color: var(--light, #e6ebff);
  }

  .m-accordion-item--content {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex-basis: 80%;
  }

  .m-accordion-item--button {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    /* this padding-block-end squeezes the button's box-shadow into this container */
    padding-block-end: 4px;
    /* ditto for this padding-inline-start */
    padding-inline-start: 6px;
    flex-basis: auto;
    flex-grow: 1;
  }

  .m-accordion-item--border {
    border-style: solid;
    border-radius: 0.25em;
  }
`;
