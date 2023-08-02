import Image from "next/image";
import styles from "./styles.module.css";

export default function Header({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={25}
          height={25}
          className={styles.headerLogo}
        />
        <h1 className={styles.headerTitle}>{title}</h1>
      </div>
    </header>
  );
}
