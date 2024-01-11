import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo modi veritatis, molestias quis qui animi quo ea quos maiores excepturi dolorem officiis asperiores placeat non earum nulla illo suscipit delectus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      <TextComponent {...args} />;
    </div>
  );
};
