import { html } from 'lit';
import './m-box.js';

export default {
  title: 'Components/Box',
  component: 'MBox',
};

export const Default = {
  render: args => html`
    <m-box
      border=${args.border}
      padding=${args.padding}
      thickness=${args.thickness}
    >
      <p slot="content">
        Ryder passed his tongue over his parched lips. "I will tell you it just
        as it happened, sir," said he. "When Horner had been arrested, it seemed
        to me that it would be best for me to get away with the stone at once,
        for I did not know at what moment the police might not take it into
        their heads to search me and my room. There was no place about the hotel
        where it would be safe. I went out, as if on some commission, and I made
        for my sister's house. She had married a man named Oakshott, and lived
        in Brixton Road, where she fattened fowls for the market. All the way
        there every man I met seemed to me to be a policeman or a detective;
        and, for all that it was a cold night, the sweat was pouring down my
        face before I came to the Brixton Road. My sister asked me what was the
        matter, and why I was so pale; but I told her that I had been upset by
        the jewel robbery at the hotel. Then I went into the back yard and
        smoked a pipe and wondered what it would be best to do.
      </p>
    </m-box>
  `,
  args: {
    border: true,
    padding: 'wide',
    thickness: 'thin',
  },
};
