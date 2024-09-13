"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../Button/Button";

export function SignOut() {
  const router = useRouter();

  async function handleLogout() {
    await signOut({ redirect: false, callbackUrl: "/" });
    router.push("/");
  }
  return (
    <Button
      color="blue"
      onClick={() => {
        handleLogout();
      }}
    >
      Sign Out
    </Button>
  );
}
