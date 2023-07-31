import { Cars } from "@/types";
import {
  calculateCarRent,
  generateCarImageUrl,
  shimer,
  toBase64,
} from "@/utils";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Card({ datas }: { datas: Cars }) {
  return (
    <div>
      <header>
        <h1>
          {datas.make} {datas.model}
        </h1>
      </header>
      <p>
        <span>R$</span>
        <span>{calculateCarRent(datas.city_mpg, datas.year)}</span>
        <span>dia</span>
      </p>
      <div className={styles.wrapperImage}>
        <Image
          src={generateCarImageUrl(datas)}
          alt="Imagem carro"
          width={400}
          height={160}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimer(400, 160)
          )}`}
        />
      </div>
      <div>
        <div>
          <Image
            src="/assets/steering-wheel.svg"
            width={20}
            height={20}
            alt="icone car"
          />{" "}
          <p>{datas.transmission === "a" ? "Automatic" : "Manual"}</p>
        </div>
        <div>
          <Image src="/assets/tire.svg" width={20} height={20} alt="icon" />
          <p>{datas.drive.toUpperCase()}</p>
        </div>
        <div>
          <Image
            src="/assets/gas.svg"
            width={18}
            height={20}
            alt="icone de estação de gás"
          />
          <p>{datas.city_mpg} MPG</p>
        </div>
      </div>
      <button type="button" title="Visualizar" aria-label="Visualizar">
        Visualizar
      </button>
    </div>
  );
}
