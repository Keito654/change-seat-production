import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import CharRandom from './Random';

export default {
  title: 'Random/Random',
  component: CharRandom,
} as ComponentMeta<typeof CharRandom>;

export const CharRandomPage: ComponentStoryObj<typeof CharRandom> = {
  args: {
    handleRandom: (
      position = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
    ) => {},
    position: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
  },
};
