import { Switch, Dialog } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  changeSeatNum: ([row, col]: number[], inputNum: number | null) => void;
  place: string | undefined;
  value: string | undefined;
};

export const SetDialog = ({
  isOpen,
  setIsOpen,
  changeSeatNum,
  place,
  value,
}: Props) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const [enabled, setEnabled] = useState(true);
  const inputChildNum = useRef(null);

  useEffect(() => {
    return setInputValue(value ?? '');
  }, [value]);

  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
      initialFocus={inputChildNum}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Overlay className="fixed inset-0" />
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
              } else {
                setEnabled(true);
                setInputValue('');
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
  );
};
