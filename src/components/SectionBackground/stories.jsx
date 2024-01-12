import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quia
            magnam animi cum unde aspernatur repudiandae reiciendis doloremque
            ullam magni cupiditate debitis vero quas ad expedita recusandae
            provident, quidem maiores.
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
