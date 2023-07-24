/** @format */

import { css } from 'lit';

export const Light = css`
  .light-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--dark, #00171f);
    /* outline-color: var(--light, #e6ebff); */
    color: var(--dark, #00171f);
    box-shadow: -0.125em 0.125em var(--light, #e6ebff),
      -0.25em 0.25em var(--dark, #00171f);
  }

  .light-theme:hover {
    filter: brightness(300%) saturate(50%);
  }
`;
