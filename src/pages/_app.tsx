import 'tailwindcss/tailwind.css';
import { Auth } from '@supabase/ui';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { client } from 'src/libs/supabase';
import 'src/styles/globals.css';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = dynamic<Props>(
  () =>
    import('src/components/layout/AuthLayout').then(
      (module) => module.AuthLayout,
    ),
  {
    ssr: false,
  },
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth.UserContextProvider supabaseClient={client}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </Auth.UserContextProvider>
  );
};

export default MyApp;
