/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { useUser } from "hooks/useUser";

function Stats() {
  const router: any = useRouter();
  const { username } = router.query;
  const { user, isError, isLoading } = useUser(username);

  return (
    <>
      <p className="text-3xl">{user?.name}</p>
      <img
        src={user?.avatar_url || ""}
        alt={`${user?.name} github profile image`}
        width="50"
        height="50"
      />
    </>
  );
}

export default Stats;
