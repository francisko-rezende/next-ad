"use client";
import { signIn } from "next-auth/react";
import { Button } from "../Button/Button";

export function SignIn() {
  return (
    <Button
      color="blue"
      onClick={() => {
        signIn("azure-ad");
      }}
    >
      Sign In
    </Button>
  );
}
