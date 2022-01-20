import type { NextPage } from 'next';
import Link from 'next/link';

const Usage: NextPage = () => {
  return (
    <div
      className="container mx-auto bg-white border border-gray-100 p-5"
      style={{ textAlign: 'center' }}
    >
      <p>
        一番下の「
        {
          <span className="text-green-600">
            {"Don't have an account? Sign up"}
          </span>
        }
        」を押すとアカウントの登録画面に切り替わります。
        <br />
        自分のメールアドレスと設定したいパスワードを入力し、
        <span className="bg-green-500 text-white p-1 font-bold rounded">
          Sign up
        </span>
        を押してください。
      </p>
      <p className="mt-7">
        すると、登録した自分のメールアドレスにメールが届きます。「
        <span className="font-bold text-lg">Confirm Your Signup</span>
        」と書かれたタイトルです。「
        <span className="text-blue-600">Confirm your mail</span>
        」と書かれたところを押すとサイトにアクセスできます。
        <br />
        次回からは登録したメールアドレスとパスワードでログインできます。
        <span className="bg-green-500 text-white p-1 font-bold rounded">
          Sign in
        </span>
        と書かれたボタンがログインボタンです。
      </p>
      <p className="mt-12">
        Sign in :
        ログイン（アカウントを持っている場合にパスワードなどを入力しサイトにアクセスする）
      </p>
      <p>Sing up : 新規にアカウントの登録をする</p>
      <div className="mt-14">
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            ログインページに戻る
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Usage;
