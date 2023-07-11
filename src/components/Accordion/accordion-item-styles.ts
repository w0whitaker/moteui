/** @format */

import { css } from 'lit';

export const accordionItemStyles = css`
  :host {
    display: block;
  }

  .m-accordion-item {
    padding-inline-start: var(--space-s, 1rem);
    display: flex;
    justify-content: space-between;
    font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  .m-accordion-item--border {
    border-style: solid;
    border-width: 0.375em;
    border-radius: 0.25em;
  }

  .border-primary {
    border-color: var(--primary, red);
  }

  .border-secondary {
    border-color: var(--secondary, blue);
  }

  .border-light {
    border-color: var(--light, lightgray);
  }

  .border-dark {
    border-color: var(--dark, black);
  }
`;
