import { ErrorData } from "types/ErrorData";
import { User } from "types/User";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

export function useUser(username: string | undefined) {
  const { data, error } = useSWR<User, ErrorData>(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher,
    { dedupingInterval: 5000 }
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
