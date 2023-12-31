import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/utils";
import { Filters } from "@/types";
import CatalogueCars from "@/components/CatalogueCars";

export default async function Home({
  searchParams,
}: {
  searchParams: Filters;
}) {

  return (
    <main className={styles.main}>
      <div className={styles.mainContainerAds}>
        <div className={styles.ads1}>
          <h2 className={styles.ads1Title}>
            A Melhor Plataforma para Aluguel de Carros
          </h2>
          <p className={styles.ads1Description}>
            Facilidade em fazer um aluguel de carro com segurança e
            confiabilidade. Claro a um preço baixo.
          </p>
          <span className={styles.ads1Tag}>Carro Alugado</span>
          <Image
            src="/assets/ads1.png"
            alt="Imagen Ads carro alugado"
            width={406}
            height={116}
            className={styles.adsImage}
          />
        </div>
        <div className={styles.ads2}>
          <h2 className={styles.ads2Title}>
            Maneira fácil de alugar um carro a um preço baixo
          </h2>
          <p className={styles.ads2Description}>
            Fornecendo serviços de aluguel de carros baratos e instalações
            seguras e confortáveis.
          </p>
          <span className={styles.ads2Tag}>Carro Alugado</span>
          <Image
            src="/assets/ads2.png"
            alt="Imagem Ads carro alugado"
            width={340}
            height={108}
            className={styles.adsImage}
          />
        </div>
      </div>
      <h2 className={styles.mainTitle}>Catálogo de carros</h2>
      <p className={styles.mainDescription}>
        Explore os carros que você pode gostar
      </p>
      <div className={styles.mainSearch}>
        <SearchBar />
        <div className={styles.mainContainerCustomFilters}>
          <CustomFilter options={yearsOfProduction} title="Year" />
          <CustomFilter options={fuels} title="Fuel" />
        </div>
      </div>
      <CatalogueCars filters={searchParams} />
    </main>
  );
}
