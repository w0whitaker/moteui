/** @format */

import { css } from 'lit';

export const Secondary = css`
  .secondary-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--secondary, #ff4081);
    color: var(--secondary, #ff4081);
    filter: drop-shadow(-0.125em 0.125em 0 var(--secondary, #ff4081))
      brightness(1);
  }

  .secondary-theme:hover {
    filter: drop-shadow(-0.25em 0.25em 0 var(--secondary, #ff4081))
      brightness(1.5);
  }
`;
