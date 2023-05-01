import 'src/components/Button/m-button';
import '.storybook/main.css';

export default {
  title: 'Components/Button',
  component: 'MButton',
};

export const Primary = {
  render: (args: { label: string; }) => {
    const { label } = args;

    return `<m-button label="${label}">${label}</m-button>`;
  },
  args: {
    label: 'Click me!',
  },
};
