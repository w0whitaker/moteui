/** @format */

import { css } from 'lit';

export const Dark = css`
  .dark-theme {
    background-color: var(--dark, #00171f);
    border-color: var(--dark, #00171f);
    color: var(--light, #e6ebff);
    box-shadow: -6px 4px var(--dark, #00171f);
  }

  .dark-theme:hover {
    filter: brightness(2) saturate(0.1);
    transition: filter 0.125s ease-in-out;
  }
`;
