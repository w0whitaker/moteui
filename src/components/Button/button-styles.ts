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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    filter: invert(25%);
    outline: none;
    box-shadow: none;
    text-decoration: underline;
    text-underline-offset: -0.325em;
    text-decoration-skip-ink: none;
  }

  .m-button:disabled:hover {
    filter: invert(25%);
  }

  .m-button--sm[square],
  .m-button--md[square],
  .m-button--lg[square] {
    position: relative;
  }

  .m-button--sm {
    font-size: 1em;
    padding-inline: var(--space-2xs, 0.5rem);
    padding-block: var(--space-xs, 0.75rem);
  }

  .m-button--sm[square] {
    padding: var(--space-xs, 0.75rem);
  }

  .m-button--md {
    font-size: 1.5em;
  }

  .m-button--lg {
    font-size: 3em;
  }

  .m-button--content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  /* .m-button[disabled] > .m-button--content {
    text-decoration: underline;
    text-underline-offset: -0.3em;
    text-decoration-skip-ink: none;
  } */
`;
