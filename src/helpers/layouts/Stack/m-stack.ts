import { css } from 'lit';

export const stackLayout = css`
  .m-stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .m-stack > * {
    magin-block: 1rem;
  }

  .m-stack > * + * {
    margin-block-start: var(--space, 1em);
  }
`;
