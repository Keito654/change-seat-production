import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SetDialog } from './SetDialog';

export default {
  title: 'Set/SetDialog',
  component: SetDialog,
} as ComponentMeta<typeof SetDialog>;

const Template: ComponentStory<typeof SetDialog> = (args) => (
  <SetDialog {...args} />
);

export const SetDialogStory = Template.bind({});
SetDialogStory.args = {
};
