"use client";

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import styles from "./styles.module.css";

export default function CustomFilter({
  options,
  title,
  className,
}: {
  options: { label: string; value: string }[];
  title: string;
  className?: string;
}) {
  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState<string>(
    options[0].value
  );

  const handleSearchParams = useCallback(
    (title: string, value: string) => {
      const newPathName = updateSearchParams(title, value.toLowerCase());
      router.push(newPathName, {scroll: false});
    },
    [router]
  );

  return (
    <select
      title={title}
      aria-label={title}
      value={optionSelected}
      onChange={(e) => {
        setOptionSelected(e.target.value);
        handleSearchParams(title, e.target.value);
      }}
      className={styles.customFilter}
    >
      <option value="">--{title}--</option>
      {options.map((option, index) => (
        <option key={index} value={option.value.toLowerCase()}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
