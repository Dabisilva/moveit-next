import { GetServerSideProps } from "next";
import Head from "next/head";
import { LoginForm } from "../components/LoginForm";
import { Container, ImageDiv } from "../styles/pages/Login.module";

export default function Login() {
  return (
    <>
      <Container>
        <Head>
          <title>Login | move.it</title>
        </Head>

        <ImageDiv>
          <img src="/simbolo.svg" alt="simbolo" />
        </ImageDiv>

        <LoginForm />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "moveit:username": username } = ctx.req.cookies;

  if (username) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
