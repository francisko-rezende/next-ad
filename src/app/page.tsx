import { auth } from "@/auth";
import { SignIn } from "@/components/signIn/signIn";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/protected");
  }
  return (
    <div className="flex gap-4 items-center">
      <SignIn />
      <Link className="underline" href={"/protected"}>
        Rota protegida
      </Link>
    </div>
  );
}
