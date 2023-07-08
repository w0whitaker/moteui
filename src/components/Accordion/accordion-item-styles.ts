/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
  }

  button {
    border: none;
    background-color: var(--secondary, lightgray);
    padding-inline: 2rem;
    border-left: 1px solid black;
  }

  .m-accordion-item {
    border-style: solid;
    border-width: 0.375em;
    border-color: #e6ebff;
    border-radius: 0.25em;
    padding-inline-start: var(--space-s, 1rem);
    display: flex;
    justify-content: space-between;
  }
`;
