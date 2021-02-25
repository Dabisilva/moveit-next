import { useState } from "react";
import { useContextChallengerData } from "../contexts/ChallengeContext";
import { useContextCountDownData } from "../contexts/CountDownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completChallenge,
  } = useContextChallengerData();

  const { resetCountDown } = useContextCountDownData();

  function handleChallengeSucceeded() {
    completChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }
  return (
    <div className={styles.challengeContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              onClick={handleChallengeSucceeded}
              type="button"
              className={styles.challengeCompletedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de Level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
