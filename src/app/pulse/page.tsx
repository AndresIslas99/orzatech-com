import { generatePageMetadata } from "@/lib/metadata";
import PulseHero from "@/components/pulse/PulseHero";
import PulseTrustBar from "@/components/pulse/PulseTrustBar";
import PulseProblemGrid from "@/components/pulse/PulseProblemGrid";
import PulseOriginStory from "@/components/pulse/PulseOriginStory";
import PulseSolution from "@/components/pulse/PulseSolution";
import PulseHowItWorks from "@/components/pulse/PulseHowItWorks";
import PulseAIEngine from "@/components/pulse/PulseAIEngine";
import PulseBIDashboard from "@/components/pulse/PulseBIDashboard";
import PulseROIGrid from "@/components/pulse/PulseROIGrid";
import PulseComparison from "@/components/pulse/PulseComparison";
import PulseTimeline from "@/components/pulse/PulseTimeline";
import PulseBenefits from "@/components/pulse/PulseBenefits";
import PulseTeam from "@/components/pulse/PulseTeam";
import PulseInlineCTA from "@/components/pulse/PulseInlineCTA";
import CTASection from "@/components/sections/CTASection";
import PulseCTAPhotos from "@/components/pulse/PulseCTAPhotos";

export const metadata = generatePageMetadata({
  title: "ORZA Pulse — Asistencia Técnica con IA",
  description:
    "Pantallas interactivas con inteligencia artificial para distribuidoras eléctricas. Validación normativa, recomendación de productos e inteligencia de negocio en tiempo real.",
  keywords: [
    "ORZA Pulse",
    "kiosk IA",
    "distribuidora electrica",
    "asistencia tecnica IA",
    "normativas industriales",
    "CMAA",
    "IEC",
    "inteligencia artificial industrial",
  ],
  path: "/pulse",
});

export default function PulsePage() {
  return (
    <>
      <PulseHero />
      <PulseTrustBar />
      <PulseProblemGrid />
      <PulseSolution />
      <PulseHowItWorks />
      <PulseInlineCTA
        text="¿Te interesa ver cómo ORZA Pulse funcionaría en tu distribuidora?"
        ctaLabel="Agenda una Demo"
      />
      <PulseAIEngine />
      <PulseBIDashboard />
      <PulseROIGrid />
      <PulseInlineCTA
        text="Retorno de inversión en 3–6 meses. ¿Empezamos a calcularlo juntos?"
        ctaLabel="Solicitar Demo Personalizada"
      />
      <PulseComparison />
      <PulseTimeline />
      <PulseBenefits />
      <PulseOriginStory />
      <PulseTeam />
      <PulseCTAPhotos />
      <CTASection
        title="¿Listo para transformar la experiencia en tu"
        highlight="distribuidora?"
        description="Agenda una demo personalizada con nuestro equipo. Te mostramos cómo ORZA Pulse se adapta a tu inventario, tus marcas y tus clientes."
        ctaLabel="Agendar Demo"
        ctaHref="/contacto"
      />
    </>
  );
}
