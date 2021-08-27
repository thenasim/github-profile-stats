/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NextRouter, useRouter } from "next/router";
import { useUser } from "hooks/useUser";
import { AiOutlineLoading } from "react-icons/ai";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { SideBar } from "@/components/SideBar";

function Stats() {
  const router: NextRouter = useRouter();
  let username = router.query?.username as string | undefined;
  const { user, isError } = useUser(username);

  if (isError)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-3xl text-violet-300">
          <RiEmotionUnhappyLine className="mx-auto" />
          {isError.message}
        </p>
      </div>
    );

  if (user && username) {
    return (
      <div>
        <SideBar user={user} username={username} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <AiOutlineLoading className="text-5xl text-gray-300 animate-spin" />
    </div>
  );
}

export default Stats;
