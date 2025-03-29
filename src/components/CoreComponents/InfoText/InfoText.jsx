// InfoText.js
import styles from "./InfoText.module.css";

const InfoText = ({ label, value, dateOfBirth }) => {
  return (
    <section className={styles.textLeft}>
      <header className={styles.label}>
        <h3>{label}</h3>
      </header>
      <div className={styles.value}>
        <p>{value}</p>
      </div>
      {dateOfBirth && (
        <div className={styles.dateOfBirth}>
          <time dateTime={dateOfBirth}>{dateOfBirth}</time>{" "}
        </div>
      )}
    </section>
  );
};

export default InfoText;
