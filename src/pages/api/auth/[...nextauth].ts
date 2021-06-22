import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { api } from "../../../services/api";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "a8f7d6a2c442e97086ff",
      clientSecret: "113a420667e0cc718da9105b5dce850530af5b52",
      scope: "read:user",
    }),

    Providers.Google({
      clientId:
        "405023995497-khu1ll0ka41dcea5hqd7nr16i5ibo51p.apps.googleusercontent.com",
      clientSecret: "BPljFzy0-5hb0YbKB9B-Sa8Q",
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
