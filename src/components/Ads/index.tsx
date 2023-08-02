import styles from "./styles.module.css";

export default function Ads({
  title,
  description,
  tag,
  children,
}: {
  title: string;
  description: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.ads}>
      <h2 className={styles.adsTitle}>{title}</h2>
      <p className={styles.adsDescription}>{description}</p>
      <span className={styles.adsTag}>{tag}</span>
      {children}
    </div>
  );
}
