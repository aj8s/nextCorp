"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import React from "react";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = <Skeleton className="flex rounded-full w-10 h-10" />;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2">
            <form action={actions.signOut}>
              <Button type="submit">Signout</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              SignIn
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              SignUp
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
