import { useEffect, useRef } from 'react';

type Props = {
  childNumState: string | undefined;
  setValue: (value: string | undefined) => void;
};

const SetChildNum = ({ childNumState, setValue }: Props) => {
  return (
    <>
      <div style={{ textAlign: 'center' }} className="h-full flex flex-col">
        <div className="my-auto">
          <label htmlFor="num">児童・生徒の人数</label>
          <input
            type="number"
            id="num"
            min={1}
            value={childNumState}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={`appearance-none block w-32 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-auto mt-3 `}
          />
          <p className="mt-8 container mx-auto">
            出席番号の最大の数を入力してください。入力すると１～入力した数まで欠番なく児童・生徒がいると認識されます。
          </p>
        </div>
      </div>
    </>
  );
};

export default SetChildNum;
