/** @format */

import { css } from 'lit';

export const Secondary = css`
  .secondary-theme {
    background-color: var(--secondary, #ff4081);
    border-color: var(--secondary, #ff4081);
    color: var(--light, #e6ebff);
    box-shadow: -0.375em 0.25em var(--secondary, #ff4081);
  }

  .secondary-theme:hover {
    filter: brightness(1.125);
    transition: filter 0.125s ease-in-out;
  }
`;
