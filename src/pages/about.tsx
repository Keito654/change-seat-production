import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div
      className="container mx-auto bg-white border border-gray-100 p-5"
      style={{ textAlign: 'center' }}
    >
      <p>先生向けに作られた席替えアプリです。</p>
      <p>
        事前に配置を設定しておくと、ランダムで変化すると見せかけて先生が設定した席の配置を表示します。
      </p>
      <p className="mt-7">
        本サイトでは、生徒や先生の個人情報は一切取得しません。
      </p>
      <p>席の配置の設定は、出席番号を入力してもらう形式となっています。</p>
      <p className="mt-7">
        ログインに使用するgoogleアカウントの情報はログイン及び、ログインしているユーザー名の表示のみに利用し、その他は利用していません。管理人からも情報の参照はできません。
      </p>
      <p className="mt-7">
        Eメールでログインされた方は、メールアドレスが管理人にのみ見える形となります。気になる方はgoogleでのログインでご利用ください。
      </p>
      <div className="mt-14">
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
