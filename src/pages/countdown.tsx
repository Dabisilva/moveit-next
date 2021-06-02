import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallangeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { SideBar } from "../components/SideBar";
import { useContextChallengerData } from "../contexts/ChallengeContext";
import { CountdownProvider } from "../contexts/CountDownContext";
import { Container, ProfileContainer } from "../styles/pages/Countdown.module";
import { ChallengerProps } from "../Types/ChallengerProps";

export default function countdown(props: ChallengerProps) {
  const { getPropsFromChallenger } = useContextChallengerData();
  useEffect(() => {
    getPropsFromChallenger(props);
  }, []);
  return (
    <>
      <Head>
        <title>Contador | move.it</title>
      </Head>
      <ProfileContainer>
        <SideBar namePath="home" />

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
