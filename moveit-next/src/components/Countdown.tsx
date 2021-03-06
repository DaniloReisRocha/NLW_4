import React from "react";
import styles from "../styles/components/Countdown.module.css";

const Countdown = () => {
  const [time, setTime] = React.useState(25 * 60);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minLeft, minRight] = String(minutes).padStart(2, "0").split("");
  const [secLeft, secRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setActive(true);
  };

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
};

export default Countdown;
