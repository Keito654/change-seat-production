import { Dialog, Switch } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { useCallback, useRef, useState } from 'react';

type Props = {
  position: (number | null)[][];
  changeSeatNum: ([row, col]: number[], inputNum: number | null) => void;
  HandleRowAdd: () => void;
  HandleRowDec: () => void;
  HandleColumnAdd: () => void;
  HandleColumnDec: () => void;
  arrayNumProps: number;
  handleSave: (position: (number | null)[][], childNum: number) => Promise<void>;
};

const SetComponent = ({
  position,
  changeSeatNum,
  HandleRowAdd,
  HandleColumnDec,
  HandleColumnAdd,
  HandleRowDec,
  arrayNumProps,
  handleSave,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [place, setPlace] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [enabled, setEnabled] = useState(true);
  const [notUseSeatNum, setnotUseSeatNum] = useState(0);
  const inputChildNum = useRef(null);

  const transArray = useCallback((position: (number | null)[][]) => {
    return position.map((t, i) => {
      const row = i;
      const seat = t.map((s, i) => {
        const col = i;
        return (
          <div
            className={`${
              s === -1 ? 'bg-black' : ''
            } border border-gray-600 w-8 h-8`}
            key={i}
            style={{ textAlign: 'center' }}
            data-testid="set-element"
            data-place={`${row},${col}`}
            data-value={s?.toString()}
            onClick={(e) => {
              setPlace(e.currentTarget.dataset.place);
              setInputValue(e.currentTarget.dataset.value);
              setIsOpen(true);
              setEnabled(e.currentTarget.dataset.value === '-1' ? false : true);
            }}
          >
            {s === -1 ? '' : s?.toString() ?? ''}
          </div>
        );
      });
      return (
        <div className="space-y-2" id={'column' + i.toString()} key={i}>
          {seat}
        </div>
      );
    });
  }, []);

  return (
    <>
      <div id="settingView" className="flex flex-col justify-center h-full p-2">
        <div className="flex items-center mb-1 space-x-3 lg:space-x-6 my-auto overflow-auto mx-auto border border-gray-200 h-full p-1 w-fit max-w-full ">
          {transArray(position)}
        </div>

        <div
          className="flex flex-col w-full mx-auto mt-auto mb-5"
          id="controlbutton"
        >
          <div className="mt-1 mx-3" id="numView">
            <div
              className={
                position.length * position[0].length - notUseSeatNum - arrayNumProps >= 0
                  ? 'text-blue-700'
                  : 'text-red-600'
              }
            >{`現在の席数:${position.length * position[0].length - notUseSeatNum}　${
              position.length * position[0].length - notUseSeatNum - arrayNumProps >= 0
                ? ''
                : '席数が設定された人数を下回っています。'
            }`}</div>
            <div>{`児童・生徒の人数:${arrayNumProps}`}</div>
          </div>
          <div className=" bottom-auto flex justify-center space-x-5 border-t-2 mx-3 mt-4 pt-4">
            <div className="flex flex-col justify-center space-y-1">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-3 h-10 w-10 rounded"
                onClick={HandleColumnDec}
              >
                {<MinusIcon />}
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 h-10 w-10 rounded"
                style={{ marginLeft: 0 }}
                onClick={HandleColumnAdd}
              >
                {<PlusIcon />}
              </button>
            </div>
            <div className="flex justify-center space-x-1 items-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 h-10 w-10 rounded"
                onClick={HandleRowDec}
              >
                {<MinusIcon />}
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 h-10 w-10 rounded"
                onClick={HandleRowAdd}
              >
                {<PlusIcon />}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={() => {
                handleSave(position, arrayNumProps);
              }}
            >
              {<CheckIcon className="h-5 w-5 inline mr-1.5" />}
              <span className="align-middle">設定を終了</span>
            </button>
          </div>
        </div>
      </div>

      {/* ダイアログ */}
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
        initialFocus={inputChildNum}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-600 flex justify-center my-3"
          >
            生徒設定画面
          </Dialog.Title>
          <div className="flex justify-start space-x-3 px-3 mb-6">
            <div>この席を使用する</div>
            <Switch
              checked={enabled}
              onChange={() => {
                if (enabled) {
                  setEnabled(false);
                  setInputValue('-1');
                  setnotUseSeatNum((pre) => pre + 1);
                } else {
                  setEnabled(true);
                  setInputValue('');
                  setnotUseSeatNum((pre) => pre - 1);
                }
              }}
              className={`${
                enabled ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className={`block uppercase tracking-wide  text-sm font-bold mb-2 ${
                enabled ? 'text-gray-700' : 'text-gray-300'
              }`}
              htmlFor="childNum"
            >
              出席番号
            </label>
            <input
              className={`appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              ref={inputChildNum}
              data-testid="input"
              id="childNum"
              type="number"
              min={0}
              max={99}
              disabled={!enabled}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                changeSeatNum(
                  [...place!.split(',').map((t) => parseInt(t))],
                  inputValue ? parseInt(inputValue) : null,
                );
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm"
            >
              保存
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm"
            >
              キャンセル
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SetComponent;
