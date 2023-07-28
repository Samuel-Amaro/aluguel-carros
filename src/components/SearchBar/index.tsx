"use client";

import { manufacturers } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const [datasForm, setDatasForm] = useState<{
    manufacturer: string;
    model: string;
  }>({
    manufacturer: "",
    model: "",
  });
  const router = useRouter();

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (datasForm.manufacturer.trim() === "" && datasForm.model.trim() === "") {
      alert(
        "Por favor entre com um fabricante ou modelo para pesquisar no catálogo."
      );
      return;
    }
    updateSearchParams(datasForm.model, datasForm.manufacturer);
  }

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("modelo", model);
    } else {
      searchParams.delete("modelo");
    }

    if (manufacturer) {
      searchParams.set("fabricante", manufacturer);
    } else {
      searchParams.delete("fabricante");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <div>
          <Image
            src="/assets/car-logo.svg"
            alt="Logo Car"
            width={32}
            height={32}
          />
          <select
            title="Escolha uma fabricante"
            aria-label="Escolha uma fabricante"
            value={datasForm.manufacturer}
            onChange={(e) => {
              setDatasForm({ ...datasForm, manufacturer: e.target.value });
            }}
          >
            <option value="">--Escolha Fabricante--</option>
            {manufacturers.map((manufacturer, index) => (
              <option value={manufacturer.toLowerCase()} key={index}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Image
            src="/assets/model-icon.png"
            alt="Icon Model Car"
            width={32}
            height={32}
          />
          <input
            type="text"
            aria-label="Entre com um modelo"
            title="Entre com um modelo"
            placeholder="Entre com um modelo"
            value={datasForm.model}
            onChange={(e) => {
              setDatasForm({ ...datasForm, model: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        title="Filtrar Catalogo"
        aria-label="Filtrar Catalogo"
      >
        <Image
          src="/assets/magnifying-glass.svg"
          alt="Icon pesquisar"
          width={32}
          height={32}
        />
      </button>
    </form>
  );
}
