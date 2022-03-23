import { useRouter } from 'next/router';
import Registration from 'src/components/templates/Registration';
import { client } from 'src/libs/supabase';

type formModel = {
  id: string;
  password: string;
};

const RegistrationContainer = () => {
  const router = useRouter();

  const handleSignUp = async (data: formModel) => {
    const { user, session, error } = await client.auth.signUp({
      email: data.id,
      password: data.password,
    });

    router.push('/');
  };

  return <Registration {...{ handleSignUp }} />;
};

export default RegistrationContainer;
