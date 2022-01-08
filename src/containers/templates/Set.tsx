import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';
import { AuthUserContext } from 'src/components/layout/AuthLayout';
import SetComponent from 'src/components/templates/Set';
import { client } from 'src/libs/supabase';

type Props = {
  arrayNumProps: number;
};

const SetContainer = ({ arrayNumProps }: Props) => {
  const [tex, setTex] = useState<(number | null)[][]>([[null]]);
  const user_id = useContext(AuthUserContext);
  const router = useRouter();

  const HandleRowAdd = useCallback(() => {
    setTex((pre) => {
      const addArray = Array<number | null>(pre[0].length).fill(null);
      return [...pre, addArray];
    });
  }, []);

  const HandleColumnAdd = useCallback(() => {
    setTex((pre) => {
      return pre.map((one) => {
        return [...one, null];
      });
    });
  }, []);

  const HandleRowDec = useCallback(() => {
    setTex((pre) => {
      if (pre.length <= 1) {
        return pre;
      }
      return pre.slice(0, pre.length - 1);
    });
  }, []);

  const HandleColumnDec = useCallback(() => {
    setTex((pre) => {
      if (pre[0].length <= 1) {
        return pre;
      }
      return pre.map((one) => one.slice(0, one.length - 1));
    });
  }, []);

  const changeSeatNum = useCallback(
    ([row, col]: number[], inputNum: number | null) => {
      setTex((pre) => {
        const preSlice = pre.slice();
        preSlice[row][col] = inputNum;
        return preSlice;
      });
    },
    [],
  );

  const handleSave = useCallback(
    async (tex: (number | null)[][], childNum: number) => {
      let { data, error } = await client
        .from('change_seat')
        .select('user_id')
        .eq('user_id', user_id);
      if (data?.length !== 0) {
        ({ data, error } = await client
          .from('change_seat')
          .update({
            seat_array: { array: tex },
            children_num: childNum,
          })
          .match({ user_id: user_id }));
        if (error) console.log(error);
        if (data) router.push('/');
      } else if (data.length === 0 || !data) {
        ({ data, error } = await client.from('change_seat').upsert({
          user_id: user_id,
          seat_array: { array: tex },
          children_num: childNum,
        }));
        if (error) console.log(error);
        if (data) router.push('/');
      } else {
        console.log(error);
      }
    },
    [router, user_id],
  );

  return (
    <SetComponent
      {...{
        tex,
        changeSeatNum,
        HandleColumnAdd,
        HandleRowAdd,
        HandleRowDec,
        HandleColumnDec,
        arrayNumProps,
        handleSave,
      }}
    />
  );
};
export default SetContainer;
