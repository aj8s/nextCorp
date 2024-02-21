"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div className="m-2 p-2">
        From Client: {JSON.stringify(session.data.user)}
      </div>
    );
  }
  return <div className="m-2 p-2">From client: User is NOT signed in</div>;
}
