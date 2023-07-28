export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { label: "2015", value: "2015" },
  { label: "2016", value: "2016" },
  { label: "2017", value: "2017" },
  { label: "2018", value: "2018" },
  { label: "2019", value: "2019" },
  { label: "2020", value: "2020" },
  { label: "2021", value: "2021" },
  { label: "2022", value: "2022" },
  { label: "2023", value: "2023" },
];

export const fuels = [
  {
    label: "Gas",
    value: "Gas",
  },
  {
    label: "Electricity",
    value: "Electricity",
  },
  {
    label: "Diesel",
    value: "Diesel",
  },
];

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
