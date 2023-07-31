import SkeletonCard from "./SkeletonCard";

export default function SkeletonCatalogueCar({ limit }: { limit: number }) {
  const cards = new Array(limit).fill(<SkeletonCard />);

  return (
    <ul>
      {cards.map((card, index) => (
        <li key={index}>
          <SkeletonCard key={index} />
        </li>
      ))}
    </ul>
  );
}
