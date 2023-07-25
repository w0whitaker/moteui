/** @format */

import { css } from 'lit';

export const Dark = css`
  .dark-theme {
    background-color: var(--dark, #00171f);
    border-color: var(--dark, #00171f);
    color: var(--light, #e6ebff);
    box-shadow: -0.125em 0.125em var(--light, #e6ebff),
      -0.375em 0.25em var(--dark, #00171f);
  }
`;
