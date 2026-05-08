import Image from "next/image";
import { Client } from "@/types";

interface ClientLogoProps {
  client: Client;
}

export default function ClientLogo({ client }: ClientLogoProps) {
  return (
    <div className="group relative w-44 h-28 rounded-xl transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-sm">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain p-3 brightness-0 invert opacity-50 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
      />
    </div>
  );
}
