"use client";

import { useState } from "react";
import Select from "../Select";
import { Filters } from "@/types";

export default function SearchBar() {
  const [datasForm, setDatasForm] = useState<Filters>({
    manufacturer: "",
    year: 0,
    model: "",
    fuel: "",
  });
  return (
    <form>
      <Select />
    </form>
  );
}
