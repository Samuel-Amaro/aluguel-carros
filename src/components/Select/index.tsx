import { manufacturers } from "@/utils";
import Image from "next/image";

export default function Select({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image src="/assets/car-logo.svg" alt="Logo Car" width={32} height={32} />
      <select title="Escolha um montadora" aria-label="Escolha um montadora">
        {manufacturers.map((manufacturer, index) => (
          <option value={manufacturer.toLowerCase()} key={index}>
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
}
