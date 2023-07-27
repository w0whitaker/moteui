/** @format */

import { css } from 'lit';

export const buttonStyles = css`
  /* https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
  :host {
    display: block;
  }

  .m-button {
    display: flex;
    position: relative;
    padding: 0;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    font-weight: 700;
  }

  .m-button::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
    border-radius: 0.25em;
    border-color: inherit;
    background-color: transparent;
    box-shadow: -1px 1px var(--light, #e6ebff);
    z-index: 1;
  }

  .m-button:hover {
    filter: contrast(2);
    transition: filter 0.125s ease-in-out;
  }

  .m-button[square] {
    position: relative;
    /* display: flex; */
  }
  /* https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
  /* re: padding-bottom: 'The solution relies on the somewhat counterintuitive fact that padding is calculated as a percentage of its parent element’s width, not height.' */

  .m-button[square]::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .m-button:disabled {
    filter: contrast(35%);
    outline: none;
    box-shadow: none;
  }

  .m-button:disabled:hover {
    filter: invert(25%);
  }

  .m-button--sm[square],
  .m-button--md[square],
  .m-button--lg[square] {
    padding: var(--space-2xs, 0.5rem);
    min-width: 2em;
  }

  .m-button--sm {
    font-size: var(--step-1, 1.5em);
    padding-inline: var(--space-xs, 0.75rem);
    padding-block: var(--space-3xs, 0.25rem);
  }

  .m-button--md {
    font-size: var(--step-2, 2.25rem);
    padding-inline: var(--space-s, 1rem);
    padding-block: var(--space-2xs, 0.5rem);
  }

  .m-button--lg {
    font-size: var(--step-3, 3.38rem);
    padding-inline: var(--space-l, 2rem);
    padding-block: var(--space-s, 1rem);
  }
`;
