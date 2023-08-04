"use client";

import { Cars } from "@/types";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MULTIPLYING_FACTOR_MILES } from "@/utils";
import styles from "./styles.module.css";

function getDrive(type: string) {
  if (type === "fwd") return "Tração dianteira";
  else if (type === "rwd") return "Tração Traseira";
  else if (type === "awd") return "Tração nas quatro rodas";
  else if (type === "4wd") return "Tração nas quatro rodas";
  else return "";
}

export default function Modal({
  datas,
  isOpen,
  onClose,
}: {
  datas: Cars;
  isOpen: boolean;
  onClose: () => void;
}) {
  const imagesLightbox = [
    <Image
      src={generateCarImageUrl(datas)}
      alt="imagem do carro normal"
      /*fill*/
      priority
      width={300}
      height={100}
      key={`image-0`}
      title="Visualizar Image do carro com angulo normal"
      className={styles.modalImage}
    />,
    <Image
      src={generateCarImageUrl(datas, "29")}
      alt="imagem do carro com angulo de 29 graus"
      /*fill*/
      priority
      width={300}
      height={100}
      key={`image-1`}
      title="Visualizar Imagen do carro com angulo de 29 graus"
      className={styles.modalImage}
    />,
    <Image
      src={generateCarImageUrl(datas, "33")}
      alt="imagem do carro com angulo de 33 graus"
      /*fill*/
      priority
      width={300}
      height={100}
      key={`image-2`}
      title="Visualizar Imagen do carro com angulo de 33 graus"
      className={styles.modalImage}
    />,
    <Image
      src={generateCarImageUrl(datas, "13")}
      alt="imagem do carro com angulo de 13 graus"
      /*fill*/
      priority
      width={300}
      height={100}
      key={`image-3`}
      title="Visualizar Imagen do carro com angulo de 13 graus"
      className={styles.modalImage}
    />,
  ];

  const refDialog = useRef<HTMLDialogElement | null>(null);
  const [imageSelectedToView, setImageSelectedToView] = useState(
    imagesLightbox[0]
  );

  function handleClose() {
    if (refDialog.current) {
      refDialog.current.close();
    }
    onClose();
  }

  useEffect(() => {
    if (refDialog.current) {
      if (isOpen) {
        document.body.classList.add("has-dialog");
        refDialog.current.showModal();
      } else {
        refDialog.current.close();
        document.body.classList.remove("has-dialog");
      }
    }

    return () => {
      document.body.classList.remove("has-dialog");
    };
  }, [isOpen]);

  return (
    <dialog ref={refDialog} onClose={handleClose} className={styles.modal}>
      <button
        onClick={() => handleClose()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "") handleClose();
        }}
      >
        <Image
          src="/assets/close.svg"
          alt="icone fechar botão"
          width={24}
          height={24}
        />
      </button>
      <div className={styles.modalLightbox}>
        <div
          aria-live="polite"
          aria-atomic="true"
          className={styles.modalAreaViewImage}
        >
          {imageSelectedToView}
        </div>
        <div className={styles.modalContainerImages}>
          {imagesLightbox.map((image, index) => (
            <div
              key={index}
              onClick={() => setImageSelectedToView(imagesLightbox[index])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "") {
                  setImageSelectedToView(imagesLightbox[index]);
                }
              }}
              className={styles.modalWrapperImage}
            >
              {image}
            </div>
          ))}
        </div>
      </div>
      <h3 className={styles.modalTitle}>{`${datas.make} ${datas.model}`}</h3>
      <div role="table" aria-label="Dados do Carro Selecionado">
        <div role="rowgroup" className={styles.modalTableRowGroup}>
          <div role="row" className={styles.modalTableRow}>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Km/L Cidade
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {(MULTIPLYING_FACTOR_MILES * datas.city_mpg).toFixed(2)}{" "}
                (aproximadamente)
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Classe
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.class}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Combinação Km/L
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {(MULTIPLYING_FACTOR_MILES * datas.combination_mpg).toFixed(2)}{" "}
                (aproximadamente)
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Cilindros
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.cylinders}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Deslocamento
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.displacement}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Transmissão de acionamento
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {getDrive(datas.drive)}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Tipo de combustível
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.fuel_type}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Km/L Estrada/Rodovia
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {(MULTIPLYING_FACTOR_MILES * datas.highway_mpg).toFixed(2)}{" "}
                (aproximadamente)
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Fabricante
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.make}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Modelo
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.model}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Transmissão
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.transmission === "a" ? "Automático" : "Manual"}
              </p>
            </div>
            <div className={styles.modalTableContainerRow}>
              <p
                role="columnheader"
                aria-sort="none"
                className={styles.modalTableHeader}
              >
                Ano
              </p>
              <p role="cell" className={styles.modalTableCell}>
                {datas.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
