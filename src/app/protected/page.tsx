import { auth } from "@/auth";
import { LogToken } from "@/components/LogToken/LogToken";
import { SignOut } from "@/components/signOut/signOut";
import React from "react";

export default async function Page() {
  const session = await auth();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Rota protegida</h1>
      <SignOut />
      <div className="grid">
        <h2 className="font-bold">Conteúdo da sessão</h2>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <LogToken />
    </div>
  );
}
