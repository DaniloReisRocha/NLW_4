import React from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  const { currentXP, xpNextLevel } = React.useContext(ChallengesContext);
  const porcentToNextLevel = Math.round((currentXP * 100) / xpNextLevel);
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${porcentToNextLevel}%` }}
        >
          {currentXP} xp
        </span>
      </div>
      <span>{xpNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
