import useSWR from "swr";
import { ErrorData } from "types/ErrorData";
import { Repos } from "types/Repo";
import { fetcher } from "utils/fetcher";

export function useRepo(username: string | undefined) {
  const { data, error } = useSWR<Repos, ErrorData>(
    // TODO: Update url to https://api.github.com/users/${username}/repos

    //username ? `http://localhost:3004/github` : null,
    username ? `https://api.github.com/users/${username}/repos` : null,
    fetcher,
    { dedupingInterval: 5000 }
  );

  return {
    repos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
