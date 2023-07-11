/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
  }

  .m-accordion-item {
    padding-inline: var(--space-s, 1rem);
    padding-block: var(--space-m, 1.5rem);
    display: flex;
    justify-content: space-between;
    font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  .m-accordion-item--border {
    border-style: solid;
    border-radius: 0.25em;
  }
`;
