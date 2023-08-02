"use client";

import { Cars } from "@/types";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MULTIPLYING_FACTOR_MILES = 1.609;

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
      /*fill*/ priority
      width={300}
      height={100}
      key={`image-0`}
      title="Visualizar Image do carro com angulo normal"
    />,
    <Image
      src={generateCarImageUrl(datas, "29")}
      alt="imagem do carro com angulo de 29 graus"
      /*fill*/ priority
      width={300}
      height={100}
      key={`image-1`}
      title="Visualizar Imagen do carro com angulo de 29 graus"
    />,
    <Image
      src={generateCarImageUrl(datas, "33")}
      alt="imagem do carro com angulo de 33 graus"
      /*fill*/ priority
      width={300}
      height={100}
      key={`image-2`}
      title="Visualizar Imagen do carro com angulo de 33 graus"
    />,
    <Image
      src={generateCarImageUrl(datas, "13")}
      alt="imagem do carro com angulo de 13 graus"
      /*fill*/ priority
      width={300}
      height={100}
      key={`image-3`}
      title="Visualizar Imagen do carro com angulo de 13 graus"
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
  }, [isOpen]);

  return (
    <dialog ref={refDialog} onClose={handleClose}>
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
      <div>
        <div aria-live="polite" aria-atomic="true">
          {imageSelectedToView}
        </div>
        <div>
          {imagesLightbox.map((image, index) => (
            <div
              key={index}
              onClick={() => setImageSelectedToView(imagesLightbox[index])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "") {
                  setImageSelectedToView(imagesLightbox[index]);
                }
              }}
            >
              {image}
            </div>
          ))}
        </div>
      </div>
      <h3>{`${datas.make} ${datas.model}`}</h3>
      <div role="table" aria-label="Dados do Carro Selecionado">
        <div role="rowgroup">
          <div role="row">
            <p role="columnheader" aria-sort="none">
              Km/L Cidade
            </p>
            <p role="columnheader" aria-sort="none">
              Classe
            </p>
            <p role="columnheader" aria-sort="none">
              Combinação Km/L
            </p>
            <p role="columnheader" aria-sort="none">
              Cilindros
            </p>
            <p role="columnheader" aria-sort="none">
              Deslocamento
            </p>
            <p role="columnheader" aria-sort="none">
              Transmissão de acionamento
            </p>
            <p role="columnheader" aria-sort="none">
              Tipo de combustível
            </p>
            <p role="columnheader" aria-sort="none">
              Km/L Estrada/Rodovia
            </p>
            <p role="columnheader" aria-sort="none">
              Fabricante
            </p>
            <p role="columnheader" aria-sort="none">
              Modelo
            </p>
            <p role="columnheader" aria-sort="none">
              Transmissão
            </p>
            <p role="columnheader" aria-sort="none">
              Ano
            </p>
          </div>
          <div role="row">
            <p role="cell">
              {(MULTIPLYING_FACTOR_MILES * datas.city_mpg).toFixed(2)}{" "}
              (aproximadamente)
            </p>
            <p role="cell">{datas.class}</p>
            <p role="cell">
              {(MULTIPLYING_FACTOR_MILES * datas.combination_mpg).toFixed(2)}{" "}
              (aproximadamente)
            </p>
            <p role="cell">{datas.cylinders}</p>
            <p role="cell">{datas.displacement}</p>
            <p role="cell">{getDrive(datas.drive)}</p>
            <p role="cell">{datas.fuel_type}</p>
            <p role="cell">
              {(MULTIPLYING_FACTOR_MILES * datas.highway_mpg).toFixed(2)}{" "}
              (aproximadamente)
            </p>
            <p role="cell">{datas.make}</p>
            <p role="cell">{datas.model}</p>
            <p role="cell">
              {datas.transmission === "a" ? "Automático" : "Manual"}
            </p>
            <p role="cell">{datas.year}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
