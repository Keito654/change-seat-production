import Link from 'next/link';
import { useForm } from 'react-hook-form';

type Props = {
  handleSignUp: (data: formModel) => Promise<void>;
};

type formModel = {
  id: string;
  password: string;
};

const Registration = ({ handleSignUp }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => handleSignUp(data);

  return (
    <div
      style={{ textAlign: 'center' }}
      className="h-full flex flex-col bg-white border border-gray-100 container mx-auto my-auto p-2"
    >
      <h1 className="text-2xl mb-5">登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('id', {
            required: 'ID(メールアドレス)を入力してください。',
            pattern: {
              value: /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
              message: '正しいメールアドレスを入力してください。',
            },
          })}
          className={`appearance-none block  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-96 mx-auto`}
          name="id"
          placeholder={'ID/メールアドレス'}
        />
        {errors.id ? <span>IDを入力してください。</span> : <br />}
        <input
          {...register('password', {
            required: true,
            minLength: 6,
          })}
          className={`appearance-none block w-96 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5 mx-auto`}
          type="password"
          name="password"
          placeholder={'パスワード'}
        />
        {errors.password ? (
          <span>パスワードを6文字以上入力してください。</span>
        ) : (
          <br />
        )}

        <input
          type="submit"
          value={'作成'}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm mt-10 mx-auto w-96 h-11 rounded-md"
        />

        <Link href={'/'}>
          <a className=" hover:text-gray-700 hover:border-gray-700 text-gray-500 font-bold py-2 px-4 text-sm mt-10 mx-auto w-96 h-11 rounded-md border-gray-500 border-2 block">
            キャンセル
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
