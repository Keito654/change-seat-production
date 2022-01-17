import { useContext, useEffect, useState } from 'react';
import { AuthUserContext } from 'src/components/layout/AuthLayout';
import { client } from 'src/libs/supabase';

export function useFetchData() {
  const [settedPosition, setSettedPosition] = useState<(number | null)[][]>([
    [],
  ]);
  const [position, setPosition] = useState<(number | null)[][]>([[]]);
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
        setSettedPosition(arr);
        setChildNum(data[0]['children_num']);
        setPosition(
          arr.map((one) => {
            return one.map((two) => (two === -1 ? -1 : null));
          }),
        );
      }
    };
    void dataFetch();
  }, [user_id]);

  return { ...{ settedPosition, childNum, position } };
}
