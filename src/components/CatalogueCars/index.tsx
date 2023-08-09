"use client";

import { Cars, Filters } from "@/types";
import SkeletonCatalogueCar from "../Skeletons/SkeletonCatalogueCar";
import ShowMore from "../ShowMore";
import styles from "./styles.module.css";
import Card from "../Card";
import useSWR from "swr";

//!obs: COM O RSC E SEARCH-PARAMS O SUSPENSE NÃO ESTA FUNCIONANDO, AO ATUALIZAR UM SEARCH PARAMS O SUSPENSE NÃO É ACIONADO
//!OBS: PARA PODERMOS COLOCAR UM LOADER VAMOS CONSUMIR A API PELO FRONT-END USANDO SWR
//!OBS: Updating search params does not trigger suspense fallback or loading.tsx
//!OBS: https://github.com/vercel/next.js/issues/53543

/*
//?INFO: FETCH DATAS IN SERVER COMPONENTES
export default async function CatalogueCars({ filters }: { filters: Filters }) {
  const datas = await fetchCars({
    manufacturer: filters.manufacturer || "",
    model: filters.model || "",
    year: filters.year || 2022,
    limit: filters.limit || 10,
    fuel: filters.fuel || "",
  });

  const isDataEmpty = !Array.isArray(datas) || datas.length < 1 || !datas;

  return !isDataEmpty ? (
    <section>
      <Suspense
        fallback={<SkeletonCatalogueCar limit={filters.limit || 10} />}
        key={filters.limit}
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
          pageNumber={(filters.limit || 10) / 10}
          isNext={(filters.limit || 10) > datas.length}
        />
        <p className={styles.mainCount}>{datas.length} Carros</p>
      </div>
    </section>
  ) : (
    <div>
      <h2>Ops, sem resultados</h2>
      <p>{datas?.message}</p>
    </div>
  );
}*/

async function fetcherCar(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ocorreu um erro ao buscar dados sobre carros no client: ${response.statusText}`
    );
  }

  const datas: Promise<Cars[]> = await response.json();

  return datas;
}

export default function CatalogueCars({ filters }: { filters: Filters }) {
  const { data, error, isLoading } = useSWR(
    `/api?manufacturer=${filters.manufacturer || ""}&model=${
      filters.model || ""
    }&fuel=${filters.fuel || ""}&year=${filters.year || 2022}&limit=${
      filters.limit || 10
    }`,
    fetcherCar
  );

  if (isLoading) {
    return <SkeletonCatalogueCar limit={filters.limit || 10} />;
  }

  if (!data) {
    return (
      <div>
        <h2>Ops, sem resultados</h2>
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <section>
      <ul className={styles.mainList}>
        {data?.map((car, index) => (
          <li key={index} className={styles.mainListItem}>
            {<Card datas={car} />}
          </li>
        ))}
      </ul>
      <div className={styles.mainContainerLoader}>
        <ShowMore
          pageNumber={(filters.limit || 10) / 10}
          isNext={(filters.limit || 10) > data.length}
        />
        <p className={styles.mainCount}>{data.length} Carros</p>
      </div>
    </section>
  );
}
