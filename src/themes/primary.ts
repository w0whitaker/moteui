/** @format */

import { css } from 'lit';

export const Primary = css`
  .primary-theme {
    background-color: var(--primary, #1e88e5);
    border-color: var(--primary, #1e88e5);
    color: var(--light, #e6ebff);
    box-shadow: -0.375em 0.25em var(--dark, #00171f);
  }

  .primary-theme:hover::before,
  .primary-theme:hover * {
    filter: brightness(1.25);
    transition: filter 0.125s ease-in-out;
  }
`;
