import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Auth from './Auth';

export default {
  title: 'Auth/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

export const AuthPage: ComponentStoryObj<typeof Auth> = {
  args: {},
};
