import AuthPage from 'src/components/templates/Auth';
import { client } from 'src/libs/supabase';

type formModel = {
  id: string;
  password: string;
};

const AuthContainer = () => {
  const handleLogin = async (data: formModel) => {
    const { user, session, error } = await client.auth.signIn(
      {
        email: data.id,
        password: data.password,
      },
      {
        redirectTo: '/',
      },
    );
  };

  return <AuthPage {...{ handleLogin }} />;
};

export default AuthContainer;
