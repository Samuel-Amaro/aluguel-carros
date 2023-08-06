import Image from "next/image";
import styles from "./styles.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.skeletonCard}>
      <p className={styles.skeletonCardTitle}></p>
      <p className={styles.skeletonCardPrice}></p>
      <Image
        src="/assets/gallery.svg"
        alt="icon"
        width={60}
        height={60}
        className={styles.skeletonCardImage}
      />
      <p className={styles.skeletonCardContainerDatas}>
        <span className={styles.skeletonCardData}></span>
        <span className={styles.skeletonCardData}></span>
        <span className={styles.skeletonCardData}></span>
      </p>
      <span className={styles.skeletonCardButton}></span>
    </div>
  );
}
