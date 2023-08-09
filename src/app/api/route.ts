import { fetchCars } from "@/api/cars";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(request.url);
  const searchParamsValues = {
    manufacturer: searchParams.get("manufacturer")
      ? (searchParams.get("manufacturer") as string)
      : "",
    year: searchParams.get("year") ? Number(searchParams.get("year")) : 2022,
    model: searchParams.get("model")
      ? (searchParams.get("model") as string)
      : "",
    fuel: searchParams.get("fuel") ? (searchParams.get("fuel") as string) : "",
    limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : 10,
  };

  const datas = await fetchCars(searchParamsValues);
  return NextResponse.json(datas);
}
