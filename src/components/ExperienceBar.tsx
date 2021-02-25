import { useState } from "react";
import { useContextChallengerData } from "../contexts/ChallengeContext";

import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel,
  } = useContextChallengerData();

  const percentToNextlevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <>
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextlevel}%` }} />

          {currentExperience != 0 && currentExperience != 100 && (
            <span
              className={styles.currentExperience}
              style={{ left: `${percentToNextlevel}%` }}
            >
              {currentExperience} xp
            </span>
          )}
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </>
  );
}
