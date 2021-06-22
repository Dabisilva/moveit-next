import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { api } from "../../../services/api";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID_PRODUCTION,
      clientSecret: process.env.GITHUB_CLIENT_SECRET_PRODUCTION,
      scope: "read:user",
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID_PRODUCTION,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_PRODUCTION,
    }),
  ],
  callbacks: {
    async signIn(user) {
      const { email, name } = user;
      try {
        await api.post("login", {
          type: "signIn",
          nome: name,
          email,
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
