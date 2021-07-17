/* eslint-disable @next/next/no-img-element */
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";
import { useUser } from "hooks/useUser";
import {
  AiOutlineLink,
  AiOutlineTwitter,
  AiOutlineLoading,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";

function Stats() {
  const router: any = useRouter();
  const { username } = router.query;
  const { user, isError } = useUser(username);

  dayjs.extend(relativeTime);

  const getShortUrl = (url: string) =>
    url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];

  if (isError) return <div>Something error happened</div>;

  if (user) {
    return (
      <>
        <div className="flex p-7 w-[350px] h-screen sticky flex-col bg-gray-900">
          <div>
            <img
              src={user.avatar_url}
              alt={`${user.name} github profile image`}
              className="w-48 h-48 mx-auto rounded-full"
            />
            <h1 className="mt-3 text-3xl text-center text-gray-200">
              {user.name}
            </h1>
            <a
              className="block text-xl font-medium text-center text-blue-500"
              href={`https://www.github.com/${username}`}
            >
              @{username}
            </a>
            <p className="mt-3 text-lg leading-tight text-gray-300">
              {user.bio}
            </p>
          </div>
          <div className="pt-4 mt-4 space-y-1 border-t-2 border-gray-800">
            <p className="flex items-center text-gray-300">
              <IoLocationOutline className="inline-block mr-2" />
              {user.location}
            </p>
            <a
              className="flex items-center text-gray-300 hover:text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
              href={user.blog}
            >
              <AiOutlineLink className="inline-block mr-2" />
              {getShortUrl(user.blog)}
            </a>
            <a
              className="flex items-center text-gray-300 hover:text-blue-500 hover:underline"
              href={`https://twitter.com/${user.twitter_username}`}
            >
              <AiOutlineTwitter className="inline-block mr-2" />
              {user.twitter_username}
            </a>
            <p className="text-gray-300">{user.email}</p>
            <p className="flex items-center text-gray-300">
              <BiTimeFive className="inline-block mr-2" /> Joined{" "}
              {dayjs(user.created_at).fromNow()}
            </p>
          </div>
          <div className="flex flex-col justify-center pt-4 mt-4 space-y-4 border-t-2 border-gray-800">
            <button className="flex items-center text-gray-300 rounded-md ring-1 ring-gray-300">
              <span className="px-8 py-2 border-r border-gray-300">
                {user.followers}
              </span>
              <span className="px-8">Followers</span>
            </button>
            <button className="flex items-center text-gray-300 rounded-md ring-1 ring-gray-300">
              <span className="px-8 py-2 border-r border-gray-300">
                {user.following}
              </span>
              <span className="px-8">Following</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <AiOutlineLoading className="text-5xl text-gray-300 animate-spin" />
    </div>
  );
}

export default Stats;
