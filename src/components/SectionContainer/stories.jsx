import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quia
          magnam animi cum unde aspernatur repudiandae reiciendis doloremque
          ullam magni cupiditate debitis vero quas ad expedita recusandae
          provident, quidem maiores.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
