/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NextRouter, useRouter } from "next/router";
import { useUser } from "hooks/useUser";
import { AiOutlineLoading } from "react-icons/ai";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { SideBar } from "@/components/SideBar";
import { RepoStats } from "@/components/RepoStats";

function Stats() {
  const router: NextRouter = useRouter();
  let username = router.query?.username as string | undefined;
  const { user, isError } = useUser(username);

  if (isError)
    return (
      <ErrorLoadingContainer>
        <p className="text-3xl text-[#ff4500]">
          <RiEmotionUnhappyLine className="mx-auto" />
          User not found
        </p>
      </ErrorLoadingContainer>
    );

  if (user) {
    return (
      <div className="flex">
        <SideBar user={user} />
        <RepoStats username={user.login} />
      </div>
    );
  }

  return (
    <ErrorLoadingContainer>
      <AiOutlineLoading className="text-5xl text-gray-300 animate-spin" />
    </ErrorLoadingContainer>
  );
}

export default Stats;

const ErrorLoadingContainer: React.FC = ({ children }) => (
  <div className="flex items-center justify-center w-full h-screen">
    {children}
  </div>
);
