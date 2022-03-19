import { log } from 'console';
import { useState } from 'react';
import Registration from 'src/components/templates/Registration';
import { client } from 'src/libs/supabase';

type formModel = {
  id: string;
  password: string;
};

const RegistrationContainer = () => {
  const handleSignUp = async (data: formModel) => {
    console.log(data);
    const { user, session, error } = await client.auth.signUp({
      email: data.id,
      password: data.password,
    });

    console.log(user);
    console.log(session);
    console.log(error);
  };

  return <Registration {...{ handleSignUp }} />;
};

export default RegistrationContainer;
