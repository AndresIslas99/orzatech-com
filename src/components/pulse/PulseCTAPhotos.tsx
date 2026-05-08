import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { pulseCTAPhotos } from "@/data/pulse";

export default function PulseCTAPhotos() {
  return (
    <ScrollReveal>
      <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-4 mt-16 max-w-7xl mx-auto px-6">
        {pulseCTAPhotos.map((photo) => (
          <div
            key={photo.src}
            className="relative rounded-2xl overflow-hidden border-2 border-dashed border-blue-600/25 min-h-[140px] md:min-h-[200px]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
