import { useContextChallengerData } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContextChallengerData();
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Dabisilva.png" alt="Davi Barbosa" />

      <div>
        <strong>Davi Barbosa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
