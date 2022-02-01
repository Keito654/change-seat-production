import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="container mx-auto bg-white border border-gray-100 p-5 ">
      <h1 className="text-xl text-blue-600 font-bold text-center mb-2">
        このサイトについて
      </h1>
      <hr />
      <h2 className="mt-7 mb-2 text-lg font-bold text-gray-800">1.概要</h2>
      <p className="pl-4">先生向けに作られた席替えアプリです。</p>
      <p className="pl-4">
        事前に配置を設定しておくと、ランダムで変化すると見せかけて先生が設定した席の配置を表示します。
      </p>
      <h2 className="mt-7 mb-2 text-lg font-bold text-gray-800">
        2.プライバシーポリシー
      </h2>
      <p className="pl-4 mb-1 font-bold text-red-600">
        生徒・児童の情報は保存しません
      </p>
      <p className="pl-4">本サイトでは、生徒の個人情報は一切取得しません。</p>
      <p className="pl-4">
        席の配置の設定は、出席番号を入力してもらう形式となっています。
      </p>
      <p className="pl-4 mt-7 mb-1 font-bold text-red-600">
        ログイン時の個人情報は保存されない形式の選択が可能
      </p>
      <p className="pl-4">
        ログインにはGoogleアカウントを利用することができます。
      </p>
      <p className="pl-4">
        こちらの方法では、このサイトにID,パスワードは一切保存されません。
      </p>
      <p className="pl-4">
        登録作業も不要ですぐに使えるため、ぜひこちらの方法をお試しください。
      </p>
      <p className="mt-7 pl-4">
        Eメールでログインされた方は、メールアドレスが管理人にのみ見える形となります。
      </p>
      <p className="pl-4">
        このデータはログインの認証のためだけに使用し、その他の利用は一切いたしません。
      </p>
      <div className="mt-14 text-center">
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            トップページに戻る
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
