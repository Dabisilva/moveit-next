import Head from "next/head";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { SideBar } from "../components/SideBar";
import { Container, ProfileContainer } from "../styles/pages/Profile.module";
import { ChallengerProps } from "../Types/ChallengerProps";

export default function profile() {
  return (
    <>
      <Head>
        <title>Perfil | move.it</title>
      </Head>
      <ProfileContainer>
        <SideBar namePath="profile" />

        <Container>
          <ExperienceBar />
          <section>
            <Profile />

            <CompleteChallenges />
          </section>
        </Container>
      </ProfileContainer>
    </>
  );
}
