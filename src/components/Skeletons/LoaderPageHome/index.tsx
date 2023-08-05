import styles from "./styles.module.css";

export default function LoaderPageHome() {
  return (
    <div className={styles.loader}>
      <h1 className={styles.title}>Aluguel de Carros</h1>
      <div className={styles.carMovement}>
        <div className={styles.car}>🚗</div>
      </div>
    </div>
  );
}
