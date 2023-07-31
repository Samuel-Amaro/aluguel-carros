import Image from "next/image";

export default function SkeletonCard() {
  return (
    <div>
      <p></p>
      <p></p>
      <Image src="/assets/gallery.svg" alt="icon" width={60} height={60} />
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <span></span>
    </div>
  );
}
