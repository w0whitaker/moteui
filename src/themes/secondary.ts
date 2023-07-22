/** @format */

import { css } from 'lit';

export const Secondary = css`
  .secondary-theme {
    background-color: var(--secondary, #ff4081);
    border-color: var(--light, #e6ebff);
    outline-color: var(--secondary, #ff4081);
    color: var(--light, #e6ebff);
    filter: drop-shadow(-0.5em 0.125em 0 var(--secondary, #ff4081))
      brightness(1.125);
  }

  .secondary-theme:hover {
    filter: drop-shadow(-0.5em 0.125em 0 var(--secondary, #ff4081))
      brightness(1.25);
  }
`;
