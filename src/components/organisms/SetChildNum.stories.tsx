import { ComponentMeta, ComponentStory } from '@storybook/react';
import SetChildNum from './SetChildNum';

export default {
  title: 'Set/SetChildNum',
  component: SetChildNum,
} as ComponentMeta<typeof SetChildNum>;

const Template: ComponentStory<typeof SetChildNum> = (args) => (
  <SetChildNum {...args} />
);

export const SetChildNumStory = Template.bind({});
SetChildNumStory.args = {
  childNumState: "1"
};
