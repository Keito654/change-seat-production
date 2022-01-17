import { MenuIcon, LogoutIcon, SupportIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';
import MenuList from 'src/components/organisms/Menu';
import { getWindowSize } from 'src/libs/GetWindowSize';
import { client } from 'src/libs/supabase';

type Props = {
  user_id: string | undefined;
};

export const Header = ({ user_id }: Props) => {
  const [open, setOpen] = useState(false);
  const { width } = getWindowSize();

  return (
    <>
      <header className="border-b-2 mb-3 bg-white">
        <div className="container mx-auto flex justify-between">
          <Link href="/">
            <a className="flex justify-items-center">
              <h1 className="pt-4 pb-2 ml-4">
                <span className="inline-block align-middle">
                  先生のための席替えアプリ
                </span>
              </h1>
            </a>
          </Link>
          <div className="flex justify-end mx-2 my-3">
            {user_id ? (
              width >= 1024 ? (
                <>
                  <Link href="/about">
                    <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full">
                      {<SupportIcon className="h-5 w-5 inline mr-1.5" />}
                      <span className="align-middle">このサイトについて</span>
                    </a>
                  </Link>
                  <Link href="/">
                    <a
                      type="button"
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full ml-1 lg:ml-5"
                      onClick={() => {
                        client.auth.signOut();
                      }}
                    >
                      {<LogoutIcon className="h-5 w-5 inline mr-1.5" />}
                      <span className="align-middle">ログアウト</span>
                    </a>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-black font-bold px-5  h-10 w-16 rounded"
                  onClick={() => setOpen(true)}
                >
                  {<MenuIcon />}
                </button>
              )
            ) : (
              width >= 1024 ?(
              <>
                <Link href="/about">
                  <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full text-xs ml-4">
                    {<SupportIcon className="h-4 w-4 inline mr-1.5" />}
                    <span className="align-middle">このサイトについて</span>
                  </a>
                </Link>
              </>
              ) :(
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-black font-bold px-5  h-10 w-16 rounded"
                  onClick={() => setOpen(true)}
                >
                  {<MenuIcon />}
                </button>
              )
            )}
          </div>
        </div>
      </header>

      <MenuList {...{ open, setOpen, user_id }} />
    </>
  );
};
