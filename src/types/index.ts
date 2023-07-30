export type Filters = {
  manufacturer?: string;
  year?: number;
  model?: string;
  fuel?: string;
  limit?: number;
};

export type Cars = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
