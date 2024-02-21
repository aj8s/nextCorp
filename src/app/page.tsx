import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button className="m-2 p-2" type="submit">
          SignIn
        </Button>
        <Button className="m-2 p-2" type="submit">
          SignUp
        </Button>
      </form>

      <form action={actions.signOut}>
        <Button className="m-2 p-2" type="submit">
          SignOut
        </Button>
      </form>

      <div className="m-2 p-2">
        {session?.user ? (
          <div>From Server: {JSON.stringify(session.user)}</div>
        ) : (
          <div>From Server: Signed Out</div>
        )}
      </div>

      <Profile />
    </div>
  );
}
