import Head from "next/head";
import { SideBar } from "../components/SideBar";
import { ProfileContainer, Container } from "../styles/pages/Leadboard.module";
export default function Leadboard() {
  return (
    <>
      <Head>
        <title>Leadboard | move.it</title>
      </Head>
      <ProfileContainer>
        <SideBar namePath="leadboard" />

        <Container />
      </ProfileContainer>
    </>
  );
}
