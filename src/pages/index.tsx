import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountDownContext";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

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
    </div>
  );
}
