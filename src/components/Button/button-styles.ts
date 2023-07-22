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
    border-width: 0.375em;
    border-radius: 0.25em;
    outline width: 2px;
    outline-style: solid;
    outline-offset: -0.25em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
  }

  .m-button[square] {
    position: relative;
    width: 100%;
    /* display: flex; */
    background-color: dodgerblue;
  }

  /*.m-button::after {
    content: '';
    box-sizing: content-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -0.375em;
    left: -0.375em;
    border-radius: inherit;
    border-color: inherit;
    border-style: solid;
    border-width: 0.375em;
    box-sizing: contnet-box;
    background-color: transparent;
    filter: brightness(1.5);
  }*/

  .m-button[square]::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .m-button:hover {
    filter: brightness(3);
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

  .m-button--sm {
    font-size: 1em;
    padding-inline: 1ch;
    padding-block: 0.5em;
  }

  .m-button--sm[square],
  .m-button--md[square],
  .m-button--lg[square] {
    position: relative;
    padding-inline: 0.5em;
    padding-block: 0.25em;
  }

  .m-button--md {
    font-size: 1.5em;
    padding-inline: 1.5ch;
    padding-block: 0.75em;
  }

  .m-button--lg {
    font-size: 3em;
    padding-inline: 3ch;
    padding-block: 1.5em;
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
