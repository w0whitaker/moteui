/** @format */

import { css } from 'lit';

export const Dark = css`
  .dark-theme {
    background-color: var(--dark, #00171f);
    border-color: var(--dark, #00171f);
    color: var(--light, #e6ebff);
    filter: drop-shadow(-0.5em 0.125em 0 var(--dark, #00171f)) brightness(1.75);
  }

  .dark-theme:hover {
    filter: drop-shadow(-0.5em 0.125em 0 var(--dark, #00171f)) brightness(2.5);
  }
`;
