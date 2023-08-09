import { fetchCars } from "@/api/cars";
import { Filters } from "@/types";
import { Suspense } from "react";
import SkeletonCatalogueCar from "../Skeletons/SkeletonCatalogueCar";
import ShowMore from "../ShowMore";
import styles from "./styles.module.css";
import Card from "../Card";

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
}
