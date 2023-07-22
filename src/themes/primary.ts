/** @format */

import { css } from 'lit';

export const Primary = css`
  .primary-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--primary, #1e88e5);
    text-decoration-color: var(--primary, #1e88e5);
    color: var(--primary, #1e88e5);
    filter: drop-shadow(-0.25em 0.25em 0 var(--primary, #1e88e5))
      brightness(2.25);
  }

  .primary-theme:hover {
    filter: drop-shadow(-0.25em 0.25em 0 var(--primary, #1e88e5))
      brightness(2.5);
  }
`;
