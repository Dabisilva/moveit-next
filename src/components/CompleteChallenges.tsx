import { useContextChallengerData } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompleteChallenges.module.css";

export function CompleteChallenges() {
  const { challengesCompleted } = useContextChallengerData();
  return (
    <div className={styles.completedContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
