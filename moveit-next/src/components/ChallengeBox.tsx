import React from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import {
  ChallengesContext,
  ChallengeType,
} from "../contexts/ChallengesContext";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = React.useContext(
    ChallengesContext
  );
  let ilustration = "";
  if (activeChallenge?.type) {
    switch (activeChallenge.type) {
      case ChallengeType.body:
        ilustration = "icons/Ilustra.svg";
        break;
      case ChallengeType.eye:
        ilustration = "icons/Eye.svg";
        break;
    }
  }
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={ilustration} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFiledButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceedeButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/icon.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
