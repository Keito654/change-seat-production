import { Auth } from '@supabase/ui';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { LayoutErrorBoundary } from 'src/components/layout/LayoutErrorBoundary';
import { Footer } from 'src/components/organisms/Footer';
import { Header } from 'src/components/organisms/Header';
import { client } from 'src/libs/supabase';

type Props = {
  children: React.ReactNode;
};

export const AuthUserContext = createContext<string | null>(null);

export const AuthLayout = (props: Props) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    setUser(client.auth.session()?.user);

    client.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });
  }, []);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>先生のための席替えアプリ</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header user_id={user?.id} />
        <main className="px-4 text-gray-600 flex-1 ">
          <LayoutErrorBoundary>
            {user ? (
              <AuthUserContext.Provider value={user?.id}>
                {props.children}
              </AuthUserContext.Provider>
            ) : router.pathname === '/usage' || router.pathname === '/about' ? (
              <div>{props.children}</div>
            ) : (
              <div className="flex justify-center bg-white container mx-auto p-5 border border-gray-100">
                <div className="w-full sm:w-96">
                  <div className="flex justify-center">
                    <Link href="/usage">
                      <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full text-sm mb-3">
                        Eメールでの登録の仕方
                      </a>
                    </Link>
                  </div>

                  <Auth
                    supabaseClient={client}
                    providers={['google']}
                    socialColors={true}
                  />
                </div>
              </div>
            )}
          </LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};
