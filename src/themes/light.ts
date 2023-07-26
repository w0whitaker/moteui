/** @format */

import { css } from 'lit';

export const Light = css`
  .light-theme {
    background-color: var(--light, #e6ebff);
    border-color: var(--dark, #00171f);
    color: var(--dark, #00171f);
    box-shadow: -6px 4px var(--dark, #00171f);
  }

  .light-theme:hover::before,
  .light-theme:hover * {
    filter: brightness(4) saturate(0.1);
    transition: filter 0.125s ease-in-out;
  }
`;
