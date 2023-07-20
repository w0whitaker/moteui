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
    border-color: inherit;
    border-radius: 0.25em;
    padding: 0;
    display: flex;
    /* position: relative; */
    background-color: inherit;
    color: inherit;
    font-family: 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    box-shadow: -0.0625em 0.165em hsla(0, 0%, 0%, 0.25),
      inset -0.125em 0.165em hsla(0, 100%, 100%, 0.25);
  }

  .m-button:disabled {
    filter: invert(25%);
    box-shadow: none;
    text-decoration: underline;
    text-underline-offset: -0.3em;
    text-decoration-skip-ink: none;
  }

  .m-button--content {
    display: block;
    width: 100%;
    height: 100%;
    padding-block: 1.5em;
    padding-inline: 1em;
    box-shadow: inset -0.0625em 0.165em hsla(0, 0%, 0%, 0.25);
  }

  /* .m-button,
  .m-button[square] {
    background-color: #00171f;
  }

  .m-button[square]:not([border-color='light']),
  .m-button:not[border-color='light']) > * {
    background-color: #e6ebff;
    box-shadow: -0.0625em 0.165em hsla(0, 100%, 100%, 0.25),
      inset -0.125em 0.165em hsla(0, 0%, 0%, 0.25);
  }

  .m-button > .m-button--content {
    color: #e6ebff;
  }

  .m-button:not([border-color='light']) > .m-button--content,
  .m-button[square]:not([border-color='light']) > .m-button--content {
    color: #00171f;
  }

  .m-button:not([border-color='light']) {
    background-color: #e6ebff;
  }

  .m-button:after {
    content: '';
    display: none;
  }

  .m-button[square] {
    padding: 0;
  }

  .m-button[square]:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .m-button--sm {
    font-size: 1em;
  }

  .m-button--sm[square] {
    width: 50%;
    position: relative;
  }

  .m-button--md {
    font-size: 1.5em;
  }

  .m-button--md[square] {
    width: 75%;
  }

  .m-button--lg {
    font-size: 1.75em;
  }

  .m-button--lg[square] {
    width: 100%;
  }

  .m-button--content {
    width: 100%;
    height: 100%;
  }
  .m-button[square] > .m-button--content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }

  .m-button[disabled] > .m-button--content {
    text-decoration: underline;
    text-underline-offset: -0.3em;
    text-decoration-skip-ink: none;
  } */
`;
