import { ComponentMeta, ComponentStory } from '@storybook/react';
import SetComponent from './Set';

export default {
  title: 'Set/Setting',
  component: SetComponent,
} as ComponentMeta<typeof SetComponent>;

const Template: ComponentStory<typeof SetComponent> = (args) => (
  <SetComponent {...args} />
);
export const SetComponentPage = Template.bind({});
SetComponentPage.args = {
  tex: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
};
