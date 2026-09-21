// Photo inside an arch-topped cream shape (headshot blends into cream).
export default function ArchPhoto({
  src = "/images/tyler.jpg",
  alt = "Tyler Ho, founder of First Offer Academy",
  width = 800,
  height = 903,
}: { src?: string; alt?: string; width?: number; height?: number }) {
  return (
    <div className="arch-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </div>
  );
}
