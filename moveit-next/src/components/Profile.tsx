import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ReisRocha.png" alt="Danilo Reis" />
      <div>
        <strong>Danilo Reis</strong>
        <p>
          <img src="icons/Up.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
