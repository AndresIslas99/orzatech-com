"use client";

import { useState } from "react";
import { FORMSPREE, CONTACT } from "@/lib/constants";

const defaultServiceOptions = [
  { value: "Robotica Industrial", label: "Robotica Industrial (Brazos UR, ABB, FANUC, KUKA)" },
  { value: "AGV / AMR", label: "AGV / AMR - Robots Moviles Autonomos" },
  { value: "Automatizacion de Gruas", label: "Automatizacion de Gruas y Carros de Transferencia" },
  { value: "Gemelos Digitales", label: "Gemelos Digitales & Simulacion (Isaac Sim)" },
  { value: "Agentes de IA", label: "Agentes de IA & Automatizacion de Procesos" },
  { value: "Software WMS", label: "Software WMS & Control de Flotas" },
  { value: "Telemetria Industrial", label: "Telemetria Industrial & IoT" },
  { value: "ORZA Pulse", label: "ORZA Pulse — Asistencia Tecnica con IA" },
  { value: "Otro", label: "Otro" },
];

interface ContactFormProps {
  serviceOptions?: { value: string; label: string }[];
  source?: string;
}

export default function ContactForm({ serviceOptions, source }: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const options = serviceOptions || defaultServiceOptions;

  return (
    <div className="bg-white/[0.02] rounded-2xl border border-white/10 p-8">
      {formStatus === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
          <p className="text-white/60 mb-6">Nos pondremos en contacto contigo pronto.</p>
          <button
            onClick={() => setFormStatus("idle")}
            className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form
          action={FORMSPREE.endpoint}
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            setFormStatus("submitting");
            const form = e.currentTarget;
            const formData = new FormData(form);
            if (source) formData.append("_source", source);
            try {
              const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              });
              if (response.ok) {
                setFormStatus("success");
                form.reset();
              } else {
                setFormStatus("error");
              }
            } catch {
              setFormStatus("error");
            }
          }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-nombre" className="block text-sm text-white/50 mb-2">Nombre</label>
              <input
                id="contact-nombre"
                type="text"
                name="nombre"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="contact-empresa" className="block text-sm text-white/50 mb-2">Empresa</label>
              <input
                id="contact-empresa"
                type="text"
                name="empresa"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Tu empresa"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm text-white/50 mb-2">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="contact-servicio" className="block text-sm text-white/50 mb-2">Servicio de interes</label>
            <select
              id="contact-servicio"
              name="servicio"
              required
              className="w-full px-4 py-3 bg-[#0a0a0b] border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white [&>option]:bg-[#0a0a0b] [&>option]:text-white"
            >
              <option value="">Seleccionar servicio</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-mensaje" className="block text-sm text-white/50 mb-2">Mensaje</label>
            <textarea
              id="contact-mensaje"
              name="mensaje"
              rows={4}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Cuentanos sobre tu proyecto..."
            />
          </div>
          {formStatus === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contactanos directamente a {CONTACT.email}
            </div>
          )}
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {formStatus === "submitting" ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
