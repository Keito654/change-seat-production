import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { AuthUserContext } from 'src/components/layout/AuthLayout';

import CharRandom from 'src/components/templates/Random';
import { client } from 'src/libs/supabase';

const CharRandomContainer: FC = () => {
  const [settedTex, setSettedTex] = useState<(number | null)[][]>([[]]);
  const [tex, setTex] = useState<(number | null)[][]>([[]]);
  const [childNum, setChildNum] = useState(1);
  const user_id = useContext(AuthUserContext);

  useEffect(() => {
    const dataFetch = async () => {
      const { data, error } = await client
        .from('change_seat')
        .select('seat_array, children_num')
        .eq('user_id', user_id);
      if (error) console.log(error);
      if (data?.length !== 0 && data !== null) {
        const arr: (number | null)[][] = data[0]['seat_array']['array'];
        setSettedTex(arr);
        setChildNum(data[0]['children_num']);
        setTex(
          arr.map((one) => {
            return one.map((two) => (two === -1 ? -1 : null));
          }),
        );
      }
    };
    void dataFetch();
  }, [user_id]);

  // 数字を渡し、それ以下の数値かつsettedTexにない数字全てで構成された配列を生成、順番をランダムにする
  // nullにはこの値を順番に渡していく
  const shuffle = useCallback(
    (num: number) => {
      const array: number[] = [];
      for (let i = 1; i <= num; i++) {
        if (settedTex.flat().includes(i)) {
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
    },
    [settedTex],
  );

  const handleRondom = useCallback(
    (texState: (number | null)[][]) => {
      const randomPromise = () =>
        new Promise((resolve) => {
          let count = 0;
          const randomText = () => {
            // 配列の数字をランダムに変化させる
            const text = texState.map((t) =>
              t.map((s) => (s === -1 ? s : Math.floor(Math.random() * 10))),
            );
            setTex(text);
            count += 1;
            if (count > 30) {
              // 30回変化したら終了
              clearInterval(interval);
              resolve(interval);
            }
          };

          const interval = setInterval(randomText, 100);
        });

      void randomPromise().then(() => {
        // 最終的に表示する配列
        const userRandomArr = shuffle(childNum);
        console.log(userRandomArr);
        const useArr = settedTex.map((one) => {
          return one.map((two) => {
            return two === null ? userRandomArr?.shift() : two;
          });
        });
        setTex(
          useArr.map((one) => {
            return one.map((two) => (two === undefined ? null : two));
          }),
        );
      });
    },
    [childNum, settedTex, shuffle],
  );

  return <CharRandom handleRandom={handleRondom} tex={tex} />;
};

export default CharRandomContainer;
