/** @format */

import { css } from 'lit';

export const Light = css`
  .light-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--dark, #00171f);
    outline-color: var(--light, #e6ebff);
    color: var(--dark, #00171f);
    filter: drop-shadow(0em 0.125em 0 var(--dark, #00171f)) brightness(10)
      saturate(1);
  }

  .light-theme:hover {
    filter: drop-shadow(-0.125em 0 0 var(--dark, #00171f)) brightness(9)
      saturate(0.9);
  }
`;
