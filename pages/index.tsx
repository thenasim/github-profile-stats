/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { useUser } from "hooks/useUser";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Home() {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const { user, isError, isLoading } = useUser(username);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleClick() {
    if (inputRef.current?.value) {
      setUsername(inputRef.current.value);
    }
  }

  if (user) {
    router.push(`/${username}/stats`);
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col px-8 py-10 m-2 space-y-5 bg-gray-900 rounded-lg shadow-md w-96">
          <FiGithub className="mx-auto mb-5 text-2xl text-gray-100" />
          <h1 className="text-3xl font-semibold text-center uppercase pb-7">
            <p className="text-gray-100">Get an Insight</p>
            <p className="text-gray-300">of Your</p>
            <p className="text-blue-700">Github Profile</p>
          </h1>
          <div className="relative">
            <input
              onKeyUp={(e) => e.key === "Enter" && handleClick()}
              ref={inputRef}
              id="username"
              type="text"
              className="w-full px-4 py-2 text-gray-300 placeholder-transparent bg-gray-800 rounded-md peer focus:outline-none"
              placeholder="Gihtub Username"
              autoFocus
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-600 transition-all cursor-text left-3 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Github Username
            </label>
            {isError && (
              <p className="text-red-600">User doesn&apos;t exists</p>
            )}
          </div>
          <button
            onClick={handleClick}
            className="flex items-center justify-center px-3 py-2 text-base font-semibold bg-blue-700 border-0 rounded-md text-blue-50 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-400"
          >
            {isLoading && username ? (
              <AiOutlineLoading3Quarters className="text-2xl animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
