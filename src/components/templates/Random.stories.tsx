import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import CharRandom from './Random';
// import 'tailwindcss/tailwind.css';

export default {
  title: 'Random/Random',
  component: CharRandom,
} as ComponentMeta<typeof CharRandom>;

const Template: ComponentStory<typeof CharRandom> = (args) => (
  <CharRandom {...args} />
);

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(/席替え開始/));
  },
};
