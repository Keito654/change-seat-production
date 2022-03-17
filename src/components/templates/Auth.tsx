import { useForm } from 'react-hook-form';

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div
      style={{ textAlign: 'center' }}
      className="h-full flex flex-col bg-white border border-gray-100 container mx-auto my-auto p-2"
    >
      <h1 className="text-2xl mb-5">ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('id', { required: true })}
          className={`appearance-none block  text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-96 mx-auto`}
          name="id"
          placeholder={'ID/メールアドレス'}
        />
        {errors.id ? <span>IDを入力してください。</span> : <br />}
        <input
          {...register('password', { required: true })}
          className={`appearance-none block w-96 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5 mx-auto`}
          type="password"
          name="password"
          placeholder={'パスワード'}
        />
        {errors.password ? <span>パスワードを入力してください。</span> : <br />}

        <input
          type="submit"
          value={'ログイン'}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm mt-10 mx-auto w-96 h-11 rounded-md"
        />

        <input
          type="submit"
          value={'アカウントを作成'}
          className=" hover:text-blue-700 hover:border-blue-700 text-blue-500 font-bold py-2 px-4 text-sm mt-10 mx-auto w-96 h-11 rounded-md border-blue-500 border-2"
        />
      </form>
    </div>
  );
};

export default Auth;
