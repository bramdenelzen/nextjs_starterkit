"use client";

import { signIn, signOut,useSession } from "@/lib/auth-client";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (!session) {
    return <div>Not authenticated</div>;
  }

  function handleSignIn() {
    signIn.email(
      {
        email: "bram.denelzen@Gmail.com",
        password: "password",
      },
      { onSuccess: () => alert("success") }
    );
  }

  return (
    <div>
      <p>Clientside</p>
      {session.data ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={handleSignIn}>Sign in</button>
      )}
    </div>
  );
}
