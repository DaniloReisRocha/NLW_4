import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const hasActiveCalleng = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveCalleng ? (
        <div className={styles.challengeActive}>
          <header>ganhe 400 xp</header>

          <main>
            <img src="icons/Ilustra.svg" />
            <strong>Novo desafio</strong>
            <p>Levanta logo</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFiledButton}>
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
