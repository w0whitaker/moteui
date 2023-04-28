import './m-list.js';

export default {
  title: 'Components/List',
  component: 'm-list',
};

export const Default = {
  render: args => {
    const { items } = args;

    return `
      <m-list>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </m-list>
    `;
  },
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
};
