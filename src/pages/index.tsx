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

        <Link href="/profile">
          <button>Logar</button>
        </Link>
      </Container>
    </>
  );
}
