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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 33%;
    background-color: transparent;
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

  .top,
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  /* .top,
  .bottom {
    padding-block: var(--space-3xs, 0.25rem);
    padding-inline-start: var(--space-m, 1.5rem);
    padding-inline-end: var(--space-3xs, 0.25rem);
  } */

  .bottom {
    border: 2px solid var(--dark, #00171f);
    background-color: var(--light, #e6ebff);
    color: var(--dark, #00171f);
  }
`;
