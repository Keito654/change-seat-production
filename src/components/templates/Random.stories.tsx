import { ComponentMeta, ComponentStory } from '@storybook/react';
import CharRandom from './Random';
// import 'tailwindcss/tailwind.css';

export default {
  title: 'Random/Random',
  component: CharRandom,
} as ComponentMeta<typeof CharRandom>;

const Template: ComponentStory<typeof CharRandom> = (args) => (
  <CharRandom {...args} />
);

export const CharRandomPage = Template.bind({});
CharRandomPage.args = {
  handleRandom: (
    tex = [
      [1, 1, 1],
      [1, 1, 1],
    ],
  ) => {},
  tex: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
};
