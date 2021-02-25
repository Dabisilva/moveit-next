import { useContextCountDownData } from "../contexts/CountDownContext";
import styles from "../styles/components/CountDown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
  const {
    startCountdown,
    seconds,
    resetCountDown,
    minutes,
    isActive,
    hasFinished,
  } = useContextCountDownData();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.CountDownButton}>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Check" />
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.CountDownButton}
            >
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="Play" />
            </button>
          ) : (
            <button
              type="button"
              onClick={resetCountDown}
              className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`}
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="Close" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
