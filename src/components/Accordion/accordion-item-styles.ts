/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
    border-style: solid;
    border-width: 2px;
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
    position: relative;
    border-color: inherit;
  }

  .m-accordion-item::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    border-color: inherit;
    background-color: transparent;
    box-shadow: -1px 1px var(--light, #e6ebff);
    z-index: 1;
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
    background-color: var(--light, #e6ebff);
    color: var(--dark, #00171f);
  }
`;
