import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuList from 'src/components/organisms/Menu';

export default { title: 'MenuBar', component: MenuList } as ComponentMeta<
  typeof MenuList
>;

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  open: true,
  setOpen: () => {},
  user_id: 'aaa-aaa-aaa-aaa',
};
