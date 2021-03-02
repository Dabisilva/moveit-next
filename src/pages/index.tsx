import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/pages/Login.module";

export default function Login() {
  return (
    <>
      <Container>
        <Head>
          <title>Login | move.it</title>
        </Head>

        <button>
          <Link href="/profile">
            <a>Logar</a>
          </Link>
        </button>
      </Container>
    </>
  );
}
