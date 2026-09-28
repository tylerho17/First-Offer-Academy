import Image from "next/image";

// Photo inside an arch-topped cream shape (headshot blends into cream).
export default function ArchPhoto({
  src = "/images/tyler.jpg",
  alt = "Tyler Ho, founder of First Offer Academy",
  width = 800,
  height = 903,
}: { src?: string; alt?: string; width?: number; height?: number }) {
  return (
    <div className="arch-photo">
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 860px) 420px, 90vw" />
    </div>
  );
}
