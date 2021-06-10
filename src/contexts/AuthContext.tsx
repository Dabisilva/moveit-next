import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import { api } from "../services/api";
import Router from "next/router";
import { toast } from "react-toastify";

type User = {
  nome: string;
  level: number;
  challenges: number;
  xp: number;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  nome: string;
  getUserFromResponse: (user: User) => void;
  signIn: (name: string, senha: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [nome, setName] = useState<string | null>(Cookies.get("username"));

  async function signIn(nome: string, senha: string) {
    await api
      .post("login", {
        nome,
        senha,
      })
      .then((response) => {
        setName(response.data);
        Cookies.set("username", response.data.nome, { expires: 7 });
        Cookies.set("level", String(response.data.level));
        Cookies.set("challengesCompleted", String(response.data.challenges));
        Cookies.set("currentExperience", String(response.data.xp));
      })
      .catch((err) => {
        toast.error("Erro ao tentar logar");
        console.log(err);
      });
  }

  function signOut() {
    Cookies.remove("username");
    Cookies.remove("level");
    Cookies.remove("currentExperience");
    Cookies.remove("challengesCompleted");
    setName(null);
  }

  function getUserFromResponse(user: User) {
    setName(user.nome);
    Cookies.set("username", user.nome);
    Cookies.set("level", String(user.level));
    Cookies.set("currentExperience", String(user.xp));
    Cookies.set("challengesCompleted", String(user.challenges));
  }

  useEffect(() => {
    const username = Cookies.get("username");
    setName(username);
    if (nome || username) {
      Router.push("/home");
    } else {
      Router.push("/");
    }
  }, [nome]);

  return (
    <AuthContext.Provider
      value={{
        nome,
        getUserFromResponse,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
