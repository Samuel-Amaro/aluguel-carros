"use client";

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function ShowMore({
  pageNumber,
  isNext,
}: {
  pageNumber: number;
  isNext: boolean;
}) {
  const router = useRouter();

  function handleNavigation() {
    const nl = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${nl}`);

    router.push(newPathname);
  }

  return (
    !isNext && (
      <button
        type="button"
        title="Mostrar mais"
        aria-label="Mostrar mais"
        onClick={handleNavigation}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "") {
            handleNavigation();
          }
        }}
        className={styles.button}
      >
        Mostrar Mais
      </button>
    )
  );
}
