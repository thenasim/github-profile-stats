import { ErrorData } from "data/ErrorData";
import { User } from "data/User";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

export function useUser(username: string) {
  const { data, error } = useSWR<User, ErrorData>(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
