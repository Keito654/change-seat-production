import { client } from 'src/libs/supabase';

export const checkExistUser = async (id: string) => {
  const { data, error } = await client
    .from('users')
    .select('email')
    .eq('email', id);

  if (error) console.log(error);

  if (data?.length !== 0 && data !== null) return false;

  return true;
};
