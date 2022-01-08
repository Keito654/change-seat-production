import { CogIcon, PlayIcon } from '@heroicons/react/outline';
import Link from 'next/link';

type CharRandomProps = {
  handleRandom: (tex: (number | null)[][]) => void;
  tex: (number | null)[][];
};

const transArray = (tex: (number | null)[][]) => {
  return tex.map((t, i) => {
    const seat = t.map((s, i) => (
      <div
        className={`${
          s === -1 ? 'bg-black' : ''
        } border border-gray-600 w-8 h-8`}
        key={i}
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
};

const CharRandom = ({ handleRandom, tex }: CharRandomProps) => {
  const ArrTex = transArray(tex);

  const ClickRandomButton = () => {
    handleRandom(tex);
  };

  return (
    <div
      style={{ textAlign: 'center' }}
      className="h-full flex flex-col bg-white border border-gray-100 container mx-auto"
    >
      <div className="my-auto p-2">
        <div className="flex items-center space-x-3 lg:space-x-6 my-auto overflow-auto mx-auto border border-gray-200 h-full p-1 w-fit max-w-full">
          {ArrTex}
        </div>
        <br />
        <div className="flex flex-col">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto"
            onClick={ClickRandomButton}
          >
            {<PlayIcon className="h-5 w-5 inline mr-1.5" />}
            <span className="align-middle">席替え開始！</span>
          </button>
          <Link href="/setting">
            <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full mt-4 w-40 mx-auto">
              {<CogIcon className="h-5 w-5 inline mr-1.5" />}
              <span className="align-middle">席の設定に移動</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharRandom;
