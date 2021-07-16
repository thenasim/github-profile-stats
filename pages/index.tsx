/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { useUser } from "hooks/useUser";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  const [username, setUsername] = useState("");
  const { isError } = useUser(username);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleClick() {
    if (inputRef.current?.value) {
      setUsername(inputRef.current.value);
    }
  }

  if (username && !isError) {
    router.push(`/${username}/stats`);
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col px-8 py-10 m-2 space-y-5 bg-gray-100 rounded-md shadow-lg w-96">
          <FiGithub className="mx-auto mb-5 text-2xl" />
          <h1 className="text-3xl font-semibold text-center uppercase pb-7">
            <p className="text-gray-800">Get an Insight</p>
            <p className="text-gray-700">of Your</p>
            <p className="text-blue-700">Github Profile</p>
          </h1>
          <div className="relative">
            <input
              ref={inputRef}
              id="username"
              type="text"
              className="w-full px-4 py-2 text-gray-900 placeholder-transparent bg-gray-200 rounded-md peer focus:outline-none"
              placeholder="Gihtub Username"
              autoFocus
            />
            <label
              htmlFor="username"
              className="absolute cursor-text left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Github Username
            </label>
            {isError && (
              <p className="text-red-600">User doesn&apos;t exists</p>
            )}
          </div>
          <button
            onClick={handleClick}
            className="px-3 py-2 font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
