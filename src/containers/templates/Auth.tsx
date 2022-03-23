import { useState } from 'react';
import AuthPage from 'src/components/templates/Auth';
import { client } from 'src/libs/supabase';

type formModel = {
  id: string;
  password: string;
};

const AuthContainer = () => {
  const [failureMessage, setFailureMessage] = useState('');

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

    if (error) {
      setFailureMessage(
        (pre) => 'メールアドレス、またはパスワードが間違っています。',
      );
    }
  };

  return <AuthPage {...{ handleLogin, failureMessage }} />;
};

export default AuthContainer;
