import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getWithExpiry, setWithExpiry, timeToExpire } from '../utils/ExpiryFuntions';

export default function usePersistentCart(key) {

  const queryClient = useQueryClient();

  const { data: value } = useQuery(key, () => getWithExpiry(key) || 0);

  const { mutateAsync: setValue } = useMutation(
    (value) => setWithExpiry(key, value, timeToExpire),
    {
      onMutate: (mutatedData) => {
        const current = value;
        queryClient.setQueryData(key, mutatedData);
        return current;
      },
      onError: (_, __, rollback) => {
        queryClient.setQueryData(key, rollback);
      },
    }
  );

  return [value, setValue];
}