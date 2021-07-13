import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

export default function Home() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen p-6 space-y-5">
        <h1 className="text-2xl text-gray-800 dark:text-white">
          Nextjs, Tailwind Starter Template
        </h1>
        {error ? (
          <h3>Error Occured</h3>
        ) : (
          <p className="text-white">{data[0].name}</p>
        )}
      </div>
    </>
  );
}
