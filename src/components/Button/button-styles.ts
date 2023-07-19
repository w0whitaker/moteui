/** @format */

import { css } from 'lit';

export const buttonStyles = css`
  /* https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
  :host {
    display: block;
  }

  .m-button {
    border-style: solid;
    border-width: 0.375em;
    border-color: #e6ebff;
    border-radius: 0.25em;
    padding: 0;
    background-color: #00171f;
    position: relative;
    font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: #e6ebff;
    box-shadow: -0.0625em 0.165em hsla(0, 0%, 0%, 0.25),
      inset -0.125em 0.165em hsla(0, 100%, 100%, 0.25);
  }

  .m-button:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .m-button--sm {
    width: 50%;
    font-size: 1em;
    position: relative;
  }

  .m-button--md {
    width: 75%;
    font-size: 1.5em;
  }

  .m-button--lg {
    width: 100%;
    font-size: 1.75em;
  }

  .m-button--content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    color: #e6ebff;
  }

  .m-button[disabled] {
    /* filter: brightness(0.5); */
    filter: invert(25%);
    box-shadow: none;
  }

  .m-button[disabled] > * {
    text-decoration: underline;
    text-underline-offset: -0.3em;
    text-decoration-skip-ink: none;
    /* text-decoration: line-through; */
  }
`;
