export default function Ads({
  title,
  description,
  tag,
  children,
}: {
  title: string;
  description: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{tag}</span>
      {children}
    </div>
  );
}
