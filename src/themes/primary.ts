/** @format */

import { css } from 'lit';

export const Primary = css`
  .primary-theme {
    background-color: var(--primary, #1e88e5);
    border-color: var(--light, #e6ebff);
    text-decoration-color: var(--primary, #1e88e5);
    color: var(--light, #e6ebff);
    filter: drop-shadow(-0.5em 0.125em 0 var(--primary, #1e88e5)) brightness(1);
  }

  .primary-theme:hover {
    filter: drop-shadow(-0.5em 0.125em 0 var(--primary, #1e88e5))
      brightness(1.25);
  }
`;
