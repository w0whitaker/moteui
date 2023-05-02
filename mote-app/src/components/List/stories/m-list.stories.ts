import 'src/components/List/m-list.ts';
import '.storybook/main.css';

export default {
  title: 'Components/List',
  component: 'm-list',
};

export const Default = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
};
