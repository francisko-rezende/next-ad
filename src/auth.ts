import NextAuth from "next-auth";
import AzureAdProvider from "next-auth/providers/azure-ad";

export const BASE_PATH = "http://localhost:3000";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    AzureAdProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  pages: { signIn: "/" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token as string;
        token.accessToken = account.access_token as string;
      }
      return token;
    },
    authorized({ auth }) {
      return !!auth;
    },
  },
});
