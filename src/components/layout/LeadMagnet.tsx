"use client";

import { useState, useEffect } from "react";
import { FORMSPREE } from "@/lib/constants";

export default function LeadMagnet() {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [leadMagnetDismissed, setLeadMagnetDismissed] = useState(false);
  const [leadFormStatus, setLeadFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const dismissed = sessionStorage.getItem("leadMagnetDismissed");
    if (dismissed) setLeadMagnetDismissed(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrollPercent = (window.scrollY / totalScroll) * 100;
      if (scrollPercent > 40 && !leadMagnetDismissed) {
        setShowLeadMagnet(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [leadMagnetDismissed]);

  if (!showLeadMagnet || leadMagnetDismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 bg-[#0a0a0b] border border-white/20 rounded-2xl shadow-2xl slide-up">
      <div className="p-6">
        <button
          onClick={() => {
            setLeadMagnetDismissed(true);
            setShowLeadMagnet(false);
            sessionStorage.setItem("leadMagnetDismissed", "true");
          }}
          className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {leadFormStatus === "success" ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-medium">¡Listo!</p>
            <p className="text-white/60 text-sm mt-1">Te enviaremos el checklist pronto.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                CHECKLIST GRATIS
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              ¿Cuantos KPIs de tu planta son estimados?
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Checklist de Visibilidad Operativa: identifica que datos tienes, cuales te faltan y cuanto te cuesta no saberlos.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLeadFormStatus("submitting");
                const form = e.currentTarget;
                const formData = new FormData(form);
                formData.append("_subject", "Descarga Checklist Visibilidad - Lead Magnet");
                try {
                  const response = await fetch(FORMSPREE.endpoint, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                  });
                  if (response.ok) {
                    setLeadFormStatus("success");
                  } else {
                    setLeadFormStatus("error");
                  }
                } catch {
                  setLeadFormStatus("error");
                }
              }}
              className="space-y-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                aria-label="Tu email"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={leadFormStatus === "submitting"}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg text-sm font-medium transition-colors"
              >
                {leadFormStatus === "submitting" ? (
                  <>
                    <svg className="animate-spin w-4 h-4 mx-auto" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span className="sr-only">Enviando...</span>
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
            {leadFormStatus === "error" && (
              <p className="text-red-400 text-xs mt-2">Error al enviar. Intenta de nuevo.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
