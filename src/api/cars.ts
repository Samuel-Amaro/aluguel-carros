import { Cars, Filters } from "@/types";

export async function fetchCars(filters: Filters) {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
    headers: {
      "X-RapidAPI-Key": process.env.KEY_API_CARS_NINJAS || "",
      "X-RapidAPI-Host": process.env.HOST_API_CARS_NINJAS || "",
    },
  };

  const response = await fetch(
    `${process.env.BASE_URL_API_CARS_NINJAS}?make=${filters.manufacturer}&model=${filters.model}&fuel_type=${filters.fuel}&year=${filters.year}&limit=${filters.limit}`,
    options
  );

  if (!response.ok) {
    throw new Error(
      `Ocorreu um erro ao buscar dados sobre carros: ${response.statusText}`
    );
  }

  return await response.json();
}
