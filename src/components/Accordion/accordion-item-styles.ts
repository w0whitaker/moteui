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
  }

  .m-accordion-item {
    border-style: solid;
    border-left-width: var(--space-s, 1rem);
    border-right-width: var(--space-s, 1rem);
    border-bottom-width: var(--space-3xs, 0.25rem);
    border-radius: 0.25em;
    border-color: var(--item-border, #00171f);
    background-color: var(--item-bg, #e6ebff);
    box-shadow: -1px 1px var(--item-shadow-inner, #e6ebff),
      -6px 4px var(--item-shadow-outer, #00171f);
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

  header {
    color: var(--item-title, #00171f);
  }

  p {
    padding-block: var(--space-s, 1rem);
    padding-inline: var(--space-xs, 0.75rem);
    border: 2px solid var(--textbox-border, #00171f);
    background-color: var(--textbox-bg, #e6ebff);
    color: var(--textbox-text, #00171f);
    border-radius: 0.25em;
  }
`;
