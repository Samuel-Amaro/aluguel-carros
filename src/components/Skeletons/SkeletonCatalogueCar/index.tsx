import SkeletonCard from "../SkeletonCard";
import styles from "./styles.module.css";

export default function SkeletonCatalogueCar({ limit }: { limit: number }) {
  const cards = new Array(limit).fill(<SkeletonCard />);

  return (
    <ul className={styles.list}>
      {cards.map((card, index) => (
        <li key={index} className={styles.listItem}>
          <SkeletonCard key={index} />
        </li>
      ))}
    </ul>
  );
}
