/** @format */

import { css } from 'lit';

export const Dark = css`
  .dark-theme {
    background-color: var(--dark, #00171f);
    border-color: var(--dark, #00171f);
    outline-color: var(--light, #e6ebff);
    color: var(--light, #e6ebff);
    filter: drop-shadow(0em 0.125em 0 var(--dark, #00171f)) saturate(1);
  }

  .dark-theme:hover {
    filter: drop-shadow(-0.125em 0 0 var(--dark, #00171f));
  }
`;
