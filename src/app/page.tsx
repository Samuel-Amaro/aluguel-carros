import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/utils";
import { Filters } from "@/types";
import { fetchCars } from "@/api/cars";
import Card from "@/components/Card";
import { Suspense } from "react";
import SkeletonCatalogueCar from "@/components/Skeletons/SkeletonCatalogueCar";
import ShowMore from "@/components/ShowMore";

export default async function Home({
  searchParams,
}: {
  searchParams: Filters;
}) {
  const datas = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
  });

  const isDataEmpty = !Array.isArray(datas) || datas.length < 1 || !datas;

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
      {!isDataEmpty ? (
        <section>
          <Suspense
            fallback={<SkeletonCatalogueCar limit={searchParams.limit || 10} />}
          >
            <ul className={styles.mainList}>
              {datas?.map((car, index) => (
                <li key={index} className={styles.mainListItem}>
                  {<Card datas={car} />}
                </li>
              ))}
            </ul>
          </Suspense>
          <div className={styles.mainContainerLoader}>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > datas.length}
            />
            <p className={styles.mainCount}>{datas.length} Carros</p>
          </div>
        </section>
      ) : (
        <div>
          <h2>Ops, sem resultados</h2>
          <p>{datas?.message}</p>
        </div>
      )}
    </main>
  );
}
