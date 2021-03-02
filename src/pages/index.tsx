import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChallengesProvider } from "../contexts/ChallengeContext";

import { Container } from "../styles/pages/Home.module";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Container>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <button>
            <Link href="/profile">
              <a>Perfil</a>
            </Link>
          </button>
        </Container>
      </ChallengesProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
