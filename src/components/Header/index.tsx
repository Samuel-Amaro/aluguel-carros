import Image from "next/image";

Image;
export default function Header({ title }: { title: string }) {
  return (
    <header>
      <Image src="/assets/logo.svg" alt="logo" width={25} height={25} />
      <h1>{title}</h1>
    </header>
  );
}
