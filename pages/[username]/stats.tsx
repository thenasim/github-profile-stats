/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { useUser } from "hooks/useUser";
import { AiOutlineLoading } from "react-icons/ai";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { SideBar } from "@/components/SideBar";

function Stats() {
  const router: any = useRouter();
  const { username } = router.query;
  const { user, isError } = useUser(username);

  if (isError)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-3xl text-violet-300">
          <RiEmotionUnhappyLine className="mx-auto" />
          User not found
        </p>
      </div>
    );

  if (user) {
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
