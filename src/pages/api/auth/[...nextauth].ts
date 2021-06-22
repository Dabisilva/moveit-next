import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { api } from "../../../services/api";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "a8f7d6a2c442e97086ff",
      clientSecret: "603e80203a901959719bee474f8ac61a21955b4b",
      scope: "read:user",
    }),
    Providers.Google({
      clientId: "405023995497-b1jq72tn0a3oes8c6l90rcc6144qssfu.apps.googleusercontent.com",
      clientSecret: "updqbqaS6kNNMek5X5nBIpKG",
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
