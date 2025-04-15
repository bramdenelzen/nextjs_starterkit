import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  return <div>serverside</div>;
}
