import type { NextPage } from 'next';
import Link from 'next/link';

const Usage: NextPage = () => {
  return (
    <div className="container mx-auto bg-white border border-gray-100 p-5">
      <h1 className="text-xl text-blue-600 font-bold text-center mb-2">
        メールアドレスでの登録方法
      </h1>
      <hr />
      <h2 className="mt-7 mb-2 text-lg font-bold text-gray-800">
        1.ログイン画面で登録をする
      </h2>
      <p className="pl-4">
        一番下の「
        {
          <span className="text-green-600 font-medium">
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
      <h2 className="mt-10 mb-2 text-lg font-bold text-gray-800">
        2.ご自身のEメールでリンクをクリックする
      </h2>
      <p className="pl-4">
        すると、登録した自分のメールアドレスにメールが届きます。「
        <span className="font-medium">Confirm Your Signup</span>
        」と書かれたタイトルです。「
        <span className="text-blue-500 font-medium">Confirm your mail</span>
        」と書かれたところを押すとサイトにアクセスできます。
        <br />
        次回からは登録したメールアドレスとパスワードでログインできます。
        <span className="bg-green-500 text-white p-1 font-bold rounded">
          Sign in
        </span>
        と書かれたボタンがログインボタンです。
      </p>
      <h2 className="mt-10 mb-2 text-lg font-bold text-gray-800">参考</h2>
      <p className="pl-4">
        Sign in :
        ログイン（アカウントを持っている場合にパスワードなどを入力しサイトにアクセスする）
      </p>
      <p className="pl-4">Sing up : 新規にアカウントの登録をする</p>
      <div className="mt-14 text-center">
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
