This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## このサイトについて

小学校の先生向けに作られた、席替えサイトです。
一見ランダムに席を変更するサイトですが、あらがじめ設定しておくことで、ランダムに変化していると見せかけて指定した配置にすることが可能です。

子供に嘘をつくことが可能になるサイトですが、特に低学年のクラスでは平和な教室を維持するために必要となってくると考えています。
ぜひ先生方に使用していただけたらと思います。

## セキュリティ面
supabaseを使用した認証を行なっています。
googleアカウントを用いた認証での利用を推奨しており、この方法でのログインは管理人である私にも情報が見えないようになっています。
メールアドレスを用いた認証も用意していますが、こちらは管理人にはメールアドレスが見えます。パスワードは見えません。

席の配置を設定する際には出席番号を入力してもらうことを想定しており、設定画面でも数値以外を入力できないようにしています。
