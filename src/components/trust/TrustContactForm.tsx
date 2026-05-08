"use client";

import { useState } from "react";
import { Check, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { FORMSPREE, CONTACT } from "@/lib/constants";

const defaultServiceOptions = [
  { value: "Robotica Industrial", label: "Robótica industrial (UR, ABB, FANUC, KUKA, Yaskawa)" },
  { value: "AGV / AMR", label: "AGV / AMR — Robots móviles autónomos" },
  { value: "Automatizacion de Gruas", label: "Automatización de grúas y carros de transferencia" },
  { value: "Gemelos Digitales", label: "Gemelos digitales & simulación (Isaac Sim)" },
  { value: "Agentes de IA", label: "Agentes de IA y automatización de procesos" },
  { value: "Software WMS", label: "Software WMS & control de flotas" },
  { value: "Telemetria Industrial", label: "Telemetría industrial & IoT" },
  { value: "ORZA Pulse", label: "ORZA Pulse — Asistencia técnica con IA" },
  { value: "Otro", label: "Otro / no estoy seguro" },
];

export interface TrustContactFormProps {
  serviceOptions?: { value: string; label: string }[];
  source?: string;
}

export default function TrustContactForm({
  serviceOptions,
  source,
}: TrustContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const options = serviceOptions || defaultServiceOptions;

  if (status === "success") {
    return (
      <div className="trust-card-elevated p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-verified-50 text-verified-500 mx-auto flex items-center justify-center">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-navy-900">
          Mensaje recibido.
        </h3>
        <p className="mt-2 text-ink-500 max-w-md mx-auto">
          Te respondemos en menos de 4 horas hábiles con cotización formal.
          Si es urgente, llámanos al{" "}
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-navy-900 font-medium hover:text-accent-500"
          >
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 btn-secondary"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE.endpoint}
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
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
            setStatus("success");
            form.reset();
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }}
      className="trust-card-elevated p-6 md:p-8 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="trust-nombre" className="block text-sm font-medium text-navy-900 mb-1.5">
            Nombre completo
          </label>
          <input
            id="trust-nombre"
            type="text"
            name="nombre"
            required
            className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 placeholder-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition"
            placeholder="Ing. Juan Pérez"
          />
        </div>
        <div>
          <label htmlFor="trust-empresa" className="block text-sm font-medium text-navy-900 mb-1.5">
            Empresa
          </label>
          <input
            id="trust-empresa"
            type="text"
            name="empresa"
            className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 placeholder-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition"
            placeholder="Industria Mexicana SA de CV"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="trust-email" className="block text-sm font-medium text-navy-900 mb-1.5">
            Email corporativo
          </label>
          <input
            id="trust-email"
            type="email"
            name="email"
            required
            className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 placeholder-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition"
            placeholder="juan@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="trust-tel" className="block text-sm font-medium text-navy-900 mb-1.5">
            Teléfono <span className="text-ink-400 font-normal">(opcional)</span>
          </label>
          <input
            id="trust-tel"
            type="tel"
            name="telefono"
            className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 placeholder-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition"
            placeholder="+52 55 0000 0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="trust-servicio" className="block text-sm font-medium text-navy-900 mb-1.5">
          Servicio de interés
        </label>
        <select
          id="trust-servicio"
          name="servicio"
          required
          className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition"
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
        <label htmlFor="trust-mensaje" className="block text-sm font-medium text-navy-900 mb-1.5">
          Cuéntanos sobre tu proyecto
        </label>
        <textarea
          id="trust-mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full px-3.5 py-2.5 bg-white border border-trust-border-strong rounded-lg text-ink-700 placeholder-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none transition resize-none"
          placeholder="Operamos una planta de manufactura con 4 grúas puente. Buscamos automatizar el proceso de carga y monitorear paros..."
        />
      </div>
      {status === "error" && (
        <div className="flex items-start gap-2.5 p-3.5 bg-critical-50 border border-critical-500/30 rounded-lg text-sm text-critical-500">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            Hubo un error al enviar. Intenta de nuevo o escríbenos directo a{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium underline"
            >
              {CONTACT.email}
            </a>
            .
          </div>
        </div>
      )}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full btn-accent justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Enviando…
            </>
          ) : (
            <>
              Solicitar cotización formal <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-ink-400 text-center">
          Respuesta en menos de 4 horas hábiles · NDA disponible al instante ·
          Sin compromiso
        </p>
      </div>
    </form>
  );
}
