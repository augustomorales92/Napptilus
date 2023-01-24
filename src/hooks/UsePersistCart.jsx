import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getWithExpiry, setWithExpiry, timeToExpire } from '../helpers/helpers';

export default function usePersistentCart(key) {

  const queryClient = useQueryClient();

  const { data } = useQuery(key, () => getWithExpiry(key) || 0);

  const { mutateAsync: setValue } = useMutation(
    (value) => setWithExpiry(key, value, timeToExpire),
    {
      onMutate: (mutatedData) => {
        const current = data;
        const totalData = mutatedData ? mutatedData + data : mutatedData
        queryClient.setQueryData(key, totalData);
        return current;
      },
      onError: (_, __, rollback) => {
        queryClient.setQueryData(key, rollback);
      },
    }
  );

  return [data, setValue];
}