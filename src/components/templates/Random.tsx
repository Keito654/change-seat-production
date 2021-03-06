import { CogIcon, PlayIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useCallback } from 'react';

type CharRandomProps = {
  handleRandom?: any;
  positionChange: (number | null)[][];
  handleReset: () => void;
  drawing: boolean;
};

const CharRandom = ({
  handleRandom,
  positionChange,
  handleReset,
  drawing,
}: CharRandomProps) => {
  const transArray = useCallback((position: (number | null)[][]) => {
    return position.map((t, i) => {
      const seat = t.map((s, i) => (
        <div
          className={`${
            s === -1 ? 'bg-black' : ''
          } border border-gray-600 w-8 h-8`}
          key={i}
          data-testid="seat-element"
        >
          {s === -1 ? '' : s?.toString() ?? ''}
        </div>
      ));
      return (
        <div className="space-y-2" id={'column' + i.toString()} key={i}>
          {seat}
        </div>
      );
    });
  }, []);

  const ArrPosition = transArray(positionChange);

  return (
    <div
      style={{ textAlign: 'center' }}
      className="h-full flex flex-col bg-white border border-gray-100 container mx-auto my-auto p-2"
    >
      <div className="flex items-center space-x-3 lg:space-x-6 my-auto overflow-auto mx-auto border border-gray-200  p-1 w-fit max-w-full h-full">
        {ArrPosition}
      </div>
      <br />
      <div className="flex flex-col">
        <div className="flex justify-center lg:space-x-10 space-x-4">
          <button
            type="button"
            className={`bg-blue-500  text-white font-bold py-2 px-4 rounded w-40
              ${drawing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}
              `}
            disabled={drawing}
            onClick={handleRandom}
          >
            {<PlayIcon className="h-5 w-5 inline mr-1.5" />}
            <span className="align-middle">席替え開始！</span>
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 "
            onClick={handleReset}
          >
            リセット
          </button>
        </div>
        <Link href="/setting">
          <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full mt-4 w-auto mx-auto">
            {<CogIcon className="h-5 w-5 inline mr-1.5" />}
            <span className="align-middle">席の設定に移動</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CharRandom;
