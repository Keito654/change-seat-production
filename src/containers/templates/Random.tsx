import { FC, useCallback, useEffect, useState } from 'react';
import CharRandom from 'src/components/templates/Random';
import {useFetchData} from 'src/hooks/useFetchData';

const CharRandomContainer: FC = () => {
  const { settedPosition, childNum, position } = useFetchData();
  const [positiontest, setpositiontest] = useState(position);

  useEffect(() => {
    return setpositiontest(position);
  }, [position]);

  // 数字を渡し、それ以下の数値かつsettedTexにない数字全てで構成された配列を生成、順番をランダムにする
  // nullにはこの値を順番に渡していく
  const shuffle = useCallback((num: number, settedPosition) => {
    const array: number[] = [];
    for (let i = 1; i <= num; i++) {
      if (settedPosition.flat().includes(i)) {
        continue;
      } else {
        array.push(i);
      }
    }
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  const handleRondom = useCallback(
    (positionState: (number | null)[][]) => {
      const randomPromise = () =>
        new Promise((resolve) => {
          let count = 0;
          const randomNumber = () => {
            // 配列の数字をランダムに変化させる
            const num = positionState.map((t) =>
              t.map((s) => (s === -1 ? s : Math.floor(Math.random() * 10))),
            );
            setpositiontest(num);
            count += 1;
            if (count > 30) {
              // 30回変化したら終了
              clearInterval(interval);
              resolve(interval);
            }
          };

          const interval = setInterval(randomNumber, 100);
        });

      void randomPromise().then(() => {
        // 最終的に表示する配列
        const userRandomArr = shuffle(childNum, settedPosition);
        console.log(userRandomArr);
        const useArr = settedPosition.map((one) => {
          return one.map((two) => {
            return two === null ? userRandomArr?.shift() : two;
          });
        });
        setpositiontest(
          useArr.map((one) => {
            return one.map((two) => (two === undefined ? null : two));
          }),
        );
      });
    },
    [childNum, setpositiontest, settedPosition, shuffle],
  );

  return <CharRandom handleRandom={handleRondom} position={positiontest} />;
};

export default CharRandomContainer;
