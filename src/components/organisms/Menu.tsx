import { Dialog, Transition } from '@headlessui/react';
import { LogoutIcon, SupportIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { client } from 'src/libs/supabase';

type Props = {
  open: boolean;
  setOpen: (isOpne: boolean) => void;
  user_id: string | undefined;
};

const MenuList = ({ open, setOpen, user_id }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-xs flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">閉じる</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className=" font-medium text-gray-900">
                      メニュー
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6 flex flex-col space-y-5">
                    {/* Replace with your content */}
                    {user_id ? (
                      <>
                        <Link href="/about">
                          <a
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full  text-center"
                            onClick={() => setOpen(false)}
                          >
                            {<SupportIcon className="h-5 w-5 inline mr-1.5" />}
                            <span className="align-middle">
                              このサイトについて
                            </span>
                          </a>
                        </Link>
                        <Link href="/">
                          <a
                            type="button"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full text-center"
                            onClick={() => {
                              setOpen(false);
                              client.auth.signOut();
                            }}
                          >
                            {<LogoutIcon className="h-5 w-5 inline mr-1.5" />}
                            <span className="align-middle">ログアウト</span>
                          </a>
                        </Link>
                      </>
                    ) : (
                      <Link href="/about">
                        <a
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full  text-center"
                          onClick={() => setOpen(false)}
                        >
                          {<SupportIcon className="h-5 w-5 inline mr-1.5" />}
                          <span className="align-middle">
                            このサイトについて
                          </span>
                        </a>
                      </Link>
                    )}

                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MenuList;
