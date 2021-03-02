import { ChallengeBox } from "../components/ChallangeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountDownContext";
import { Container } from "../styles/pages/Profile.module";

export default function profile() {
  return (
    <>
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
    </>
  );
}
