import { Cars } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
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
        />
      </div>
      <div>
        <p>{datas.transmission}</p>
        <p>{datas.drive}</p>
        <p>{datas.city_mpg}</p>
      </div>
    </div>
  );
}
