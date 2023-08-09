"use client";

import { updateSearchParams } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { useCallback } from "react";
import Link from "next/link";

export default function ShowMore({
  pageNumber,
  isNext,
}: {
  pageNumber: number;
  isNext: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(
        searchParams as unknown as URLSearchParams
      );
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  /*function handleNavigation() {
    const nl = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${nl}`);

    router.push(newPathname);
  }*/

  return (
    !isNext && (
      <button
        type="button"
        title="Mostrar mais"
        aria-label="Mostrar mais"
        onClick={
          () => {
            router.push(
              pathname +
                "?" +
                createQueryString("limit", `${(pageNumber + 1) * 10}`),
              { scroll: false }
            );
          } /*handleNavigation*/
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "") {
            /*handleNavigation();*/
            router.push(
              pathname +
                "?" +
                createQueryString("limit", `${(pageNumber + 1) * 10}`),
              { scroll: false }
            );
          }
        }}
        className={styles.button}
      >
        Mostrar Mais
      </button>
    )
  );
}
