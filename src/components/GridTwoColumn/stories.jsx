import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam provident maiores, impedit beatae accusamus voluptates pariatur necessitatibus? Exercitationem dolores, quibusdam sit accusantium dignissimos illum ad deserunt, at cum hic tempora.',
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
