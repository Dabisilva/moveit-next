import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallangeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { SideBar } from "../components/SideBar";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { CountdownProvider } from "../contexts/CountDownContext";
import { Container, ProfileContainer } from "../styles/pages/Countdown.module";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function countdown(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ProfileContainer>
        <SideBar namePath="home" />

        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <Container>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />

                  <CompleteChallenges />
                  <CountDown />
                </div>

                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </Container>
        </ChallengesProvider>
      </ProfileContainer>
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