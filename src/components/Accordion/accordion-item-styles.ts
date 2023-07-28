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

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-block: var(--space-3xs, 0.25rem);
    padding-inline: var(--space-xs, 0.75rem);
  }

  header,
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding-block: var(--space-3xs, 0.25rem);
  }

  p {
    padding-block: var(--space-s, 1rem);
    padding-inline: var(--space-xs, 0.75rem);
    border: 2px solid var(--dark, #00171f);
    border-radius: 0.25em;
  }
`;
