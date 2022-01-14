import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default { title: 'Header', component: Header } as ComponentMeta<
  typeof Header
>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  user_id: 'aaa-aaa-aaa-aaa',
};
