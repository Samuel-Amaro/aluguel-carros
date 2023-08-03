"use client";

import { Cars } from "@/types";
import {
  calculateCarRent,
  generateCarImageUrl,
  shimer,
  toBase64,
} from "@/utils";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import { MULTIPLYING_FACTOR_MILES } from "@/utils";

export default function Card({ datas }: { datas: Cars }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className={styles.card}>
        <header>
          <h1 className={styles.cardTitle}>
            {datas.make} {datas.model}
          </h1>
        </header>
        <p className={styles.cardPrice}>
          <span className={styles.cardPriceValue}>
            R${calculateCarRent(datas.city_mpg, datas.year)}/{" "}
          </span>
          <span className={styles.cardPriceTime}>dia</span>
        </p>
        <div className={styles.wrapperImage}>
          <Image
            src={generateCarImageUrl(datas)}
            alt="Imagem carro"
            /*width={400}
            height={160}*/
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimer(400, 160)
            )}`}
            fill
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardContainerDatas}>
          <div className={styles.cardData}>
            <Image
              src="/assets/steering-wheel.svg"
              width={20}
              height={20}
              alt="icone car"
              className={styles.cardDataIcon}
            />{" "}
            <p className={styles.cardDataValue}>
              {datas.transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>
          <div className={styles.cardData}>
            <Image
              src="/assets/tire.svg"
              width={20}
              height={20}
              alt="icon"
              className={styles.cardDataIcon}
            />
            <p className={styles.cardDataValue}>{datas.drive.toUpperCase()}</p>
          </div>
          <div className={styles.cardData}>
            <Image
              src="/assets/gas.svg"
              width={18}
              height={20}
              alt="icone de estação de gás"
              className={styles.cardDataIcon}
            />
            <p className={styles.cardDataValue}>
              {(MULTIPLYING_FACTOR_MILES * datas.city_mpg).toFixed(2)} Km/L
            </p>
          </div>
        </div>
        <button
          type="button"
          title="Visualizar"
          aria-label="Visualizar"
          onClick={() => setModalIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "") setModalIsOpen(true);
          }}
          className={styles.cardButton}
        >
          Visualizar
        </button>
      </div>
      {modalIsOpen &&
        createPortal(
          <Modal
            datas={datas}
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />,
          document.body
        )}
    </>
  );
}
