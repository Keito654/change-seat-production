import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Registration from './Registration';

export default {
  title: 'Auth/Registration',
  component: Registration,
} as ComponentMeta<typeof Registration>;

export const RegistrationPage: ComponentStoryObj<typeof Registration> = {
  args: {},
};
