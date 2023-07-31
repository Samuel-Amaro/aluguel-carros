import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Ads from "@/components/Ads";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fuels, yearsOfProduction } from "@/utils";
import { Filters } from "@/types";
import { fetchCars } from "@/api/cars";
import Card from "@/components/Card";
import { Suspense } from "react";
import SkeletonCatalogueCar from "@/components/Skeletons/SkeletonCatalogueCar";
import ShowMore from "@/components/ShowMore";
import Footer from "@/components/Footer";

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
    <main>
      <div>
        <Ads
          title="A Melhor Plataforma para Aluguel de Carros"
          description="Facilidade em fazer um aluguel de carro com segurança e
            confiabilidade. Claro a um preço baixo."
          tag="Carro Alugado"
        >
          <Image
            src="/assets/ads1.png"
            alt="Imagen Ads carro alugado"
            width={406}
            height={116}
          />
        </Ads>
        <Ads
          title="Maneira fácil de alugar um carro a um preço baixo"
          description="Fornecendo serviços de aluguel de carros baratos e instalações
            seguras e confortáveis."
          tag="Carro Alugado"
        >
          <Image
            src="/assets/ads2.png"
            alt="Imagem Ads carro alugado"
            width={340}
            height={108}
          />
        </Ads>
      </div>
      <h2>Catálogo de carros</h2>
      <p>Explore os carros que você pode gostar</p>
      <div>
        <SearchBar />
        <div>
          <CustomFilter options={yearsOfProduction} title="Year" />
          <CustomFilter options={fuels} title="Fuel" />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <Suspense
            fallback={<SkeletonCatalogueCar limit={searchParams.limit || 10} />}
          >
            <ul>
              {datas?.map((car, index) => (
                <li key={index}>{<Card datas={car} />}</li>
              ))}
            </ul>
          </Suspense>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > datas.length}
          />
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
