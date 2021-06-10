import { useAuth } from "../contexts/AuthContext";
import { useContextChallengerData } from "../contexts/ChallengeContext";
import { ProfileContainer } from "../styles/components/Profile.module";

export function Profile() {
  const { level } = useContextChallengerData();
  const { nome } = useAuth();

  return (
    <ProfileContainer>
      <img src="https://github.com/Dabisilva.png" alt="Davi Barbosa" />

      <div>
        <strong>{nome}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
