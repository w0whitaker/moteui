/** @format */

import { css } from 'lit';

export const Light = css`
  .light-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--dark, #00171f);
    color: var(--dark, #00171f);
    filter: drop-shadow(-0.5em 0.125em 0 var(--dark, #00171f)) brightness(1.75);
  }

  .light-theme:hover {
    filter: drop-shadow(-0.5em 0.125em 0 var(--dark, #00171f)) brightness(5);
  }
`;
