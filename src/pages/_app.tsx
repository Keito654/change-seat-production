import { Auth } from '@supabase/ui';
import type { AppProps } from 'next/app';
import { AuthLayout } from 'src/components/layout/AuthLayout';
import { client } from 'src/libs/supabase';

import 'src/styles/globals.css';
import 'tailwindcss/tailwind.css';

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
