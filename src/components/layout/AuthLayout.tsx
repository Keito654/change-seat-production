import { Auth } from '@supabase/ui';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { LayoutErrorBoundary } from 'src/components/layout/LayoutErrorBoundary';
import { Footer } from 'src/components/organisms/Footer';
import { Header } from 'src/components/organisms/Header';
import AuthContainer from 'src/containers/templates/Auth';
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
              // ユーザー情報がある場合
              <AuthUserContext.Provider value={user?.id}>
                {props.children}
              </AuthUserContext.Provider>
            ) : // ユーザー情報がない場合
            ['/about', '/usage', '/registration'].includes(router.pathname) ? (
              // 匿名ユーザーでも許可するページであった場合
              <div>{props.children}</div>
            ) : (
              // 匿名ユーザーを許可しない場合
              <AuthContainer />
            )}
          </LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};
