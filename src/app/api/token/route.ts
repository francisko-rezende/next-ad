import { getToken } from "next-auth/jwt";

export async function GET(request: Request) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET as string,
  });

  console.log(token);

  return Response.json({ status: "ok" });
}
