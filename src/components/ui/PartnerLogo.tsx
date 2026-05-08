import Image from "next/image";

interface PartnerLogoProps {
  partner: { name: string; logo: string; certified?: boolean };
}

export default function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="relative flex items-center justify-center bg-white/90 rounded-2xl border border-white/20 hover:bg-white transition-all h-40">
      {partner.certified && (
        <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full">
          CERTIFICADO
        </div>
      )}
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        className="object-cover p-4"
      />
    </div>
  );
}
