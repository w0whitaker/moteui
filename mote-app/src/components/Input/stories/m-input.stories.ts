import 'src/components/Input/m-input';
import '.storybook/main.css';

export default {
  title: 'Components/Input',
  component: 'MInput',
};

export const Default = {
  render: (args: { name: string; }) => {
    const { name } = args;

    return `<m-input name="${name}"></m-input>`;
  },
  args: {
    name: 'enter',
  },
};
