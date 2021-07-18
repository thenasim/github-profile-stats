/* eslint-disable @next/next/no-img-element */
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { User } from "data/User";
import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Anchor } from "./Anchor";

interface Props {
  user: User;
  username: string;
}

export const SideBar: React.FC<Props> = ({ user, username }) => {
  dayjs.extend(relativeTime);

  const getShortUrl = (url: string) =>
    url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];

  return (
    <div className="flex border-r border-gray-800 p-7 w-[350px] h-screen sticky flex-col bg-gray-900">
      <div>
        <img
          src={user.avatar_url}
          alt={`${user.name} github profile image`}
          className="w-48 h-48 mx-auto rounded-full"
        />
        <h1 className="mt-3 text-3xl text-center text-gray-200">{user.name}</h1>
        <a
          className="block text-xl font-medium text-center text-blue-500"
          href={`https://www.github.com/${username}`}
        >
          @{username}
        </a>
        {user.bio && (
          <p className="mt-3 text-lg leading-tight text-gray-300">{user.bio}</p>
        )}
      </div>
      <div className="pt-4 mt-4 space-y-1 border-t-2 border-gray-800">
        {user.location && (
          <p className="flex items-center text-gray-300">
            <IoLocationOutline className="inline-block mr-2" />
            {user.location}
          </p>
        )}
        <Anchor href={user.blog} blank>
          <AiOutlineLink className="inline-block mr-2" />
          {getShortUrl(user.blog)}
        </Anchor>
        <Anchor host="https://twitter.com/" href={user.twitter_username} blank>
          <AiOutlineTwitter className="inline-block mr-2" />
          {user.twitter_username}
        </Anchor>
        <Anchor host="mailto:" href={user.email} blank>
          <HiOutlineMail className="inline-block mr-2" />
          {user.email}
        </Anchor>
        <p className="flex items-center text-gray-300">
          <BiTimeFive className="inline-block mr-2" /> Joined{" "}
          {dayjs(user.created_at).fromNow()}
        </p>
      </div>
      <div className="flex flex-col justify-center pt-5 mt-4 space-y-4 border-t-2 border-gray-800">
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
  );
};
