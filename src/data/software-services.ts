import { SoftwareSubService, PricingTier, ProcessStep, ProblemSolution } from "@/types";

export const softwareSubServices: SoftwareSubService[] = [
  {
    id: "dashboards",
    title: "Dashboards en Tiempo Real",
    description:
      "Ve como va tu negocio en una sola pantalla. Ventas, inventario, productividad y mas, actualizado al momento y accesible desde tu celular.",
    icon: "/images/icons/dashboard.webp",
    features: [
      "Metricas de negocio en tiempo real",
      "Acceso desde cualquier dispositivo",
      "Alertas automaticas",
      "Reportes exportables",
    ],
  },
  {
    id: "telemetria",
    title: "Telemetria Industrial & IoT",
    description:
      "Conecta PLCs, sensores y maquinas a una plataforma de datos en tiempo real. Monitoreo de OEE, paros, produccion y consumo energetico desde cualquier dispositivo.",
    icon: "/images/icons/telemetry.webp",
    features: [
      "Conexion a PLCs y sensores industriales",
      "Monitoreo OEE en tiempo real",
      "Alertas de paros no programados",
      "Historicos de produccion exportables",
    ],
  },
  {
    id: "ai-agents",
    title: "Agentes de IA",
    description:
      "Chatbots y agentes inteligentes que atienden a tus clientes por WhatsApp, web y redes sociales 24/7. Responden preguntas, agendan citas y capturan leads automaticamente.",
    icon: "/images/icons/ai-agents.webp",
    features: [
      "Atencion 24/7 por WhatsApp y web",
      "Captura automatica de leads",
      "Agenda citas sin intervencion humana",
      "Respuestas personalizadas con IA",
    ],
  },
  {
    id: "integrations",
    title: "Integracion de Sistemas",
    description:
      "Conectamos tus herramientas para que trabajen juntas: tu tienda en linea con tu inventario, tu CRM con tu WhatsApp, tu contabilidad con tus ventas.",
    icon: "/images/icons/control-room.webp",
    features: [
      "Conexion entre sistemas existentes",
      "Automatizacion de procesos manuales",
      "Sincronizacion de datos",
      "APIs personalizadas",
    ],
  },
  {
    id: "crm",
    title: "CRM Automatizado",
    description:
      "Deja de perder clientes por falta de seguimiento. Un CRM que se actualiza solo, te recuerda cuando llamar y te dice que clientes estan listos para comprar.",
    icon: "/images/icons/crm.webp",
    features: [
      "Seguimiento automatico de leads",
      "Recordatorios inteligentes",
      "Pipeline visual de ventas",
      "Reportes de conversion",
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$15,000",
    period: "MXN/mes",
    description: "Para negocios que quieren empezar a automatizar",
    features: [
      "1 agente de IA (WhatsApp o web)",
      "CRM basico con seguimiento de leads",
      "Dashboard con 5 metricas clave",
      "Soporte por email",
      "1 integracion incluida",
    ],
    highlighted: false,
    cta: "Empezar",
  },
  {
    name: "Growth",
    price: "$35,000",
    period: "MXN/mes",
    description: "Para empresas en crecimiento que necesitan escalar",
    features: [
      "Agentes de IA multicanal (WhatsApp, web, redes)",
      "CRM avanzado con automatizaciones",
      "Dashboards personalizados ilimitados",
      "Soporte prioritario",
      "Hasta 5 integraciones",
      "Reportes semanales automaticos",
    ],
    highlighted: true,
    cta: "Elegir Growth",
  },
  {
    name: "Industrial",
    price: "$65,000",
    period: "MXN/mes",
    description: "Para plantas y almacenes que necesitan visibilidad operativa",
    features: [
      "Telemetria industrial (PLCs, sensores, IoT)",
      "Dashboard OEE y produccion en tiempo real",
      "Hasta 10 integraciones (ERP, WMS, SCADA)",
      "Alertas y reportes automaticos por turno",
      "Soporte dedicado",
      "Gemelo digital basico incluido",
    ],
    highlighted: false,
    cta: "Cotizar Industrial",
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para operaciones complejas que requieren solucion a medida",
    features: [
      "Solucion completamente personalizada",
      "Agentes de IA con entrenamiento custom",
      "Integraciones ilimitadas",
      "Soporte dedicado 24/7",
      "SLA garantizado",
      "Consultor asignado",
    ],
    highlighted: false,
    cta: "Contactar",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnostico de Datos",
    description:
      "Mapeamos tus fuentes de datos, identificamos que informacion ya tienes y donde estan los puntos ciegos de tu operacion.",
    duration: "1 semana",
  },
  {
    step: 2,
    title: "Implementacion de Visibilidad",
    description:
      "Conectamos tus sistemas y desplegamos dashboards, telemetria o agentes de IA. Tu equipo ve resultados desde el dia uno.",
    duration: "2-4 semanas",
  },
  {
    step: 3,
    title: "Optimizacion y Escala",
    description:
      "Medimos resultados, optimizamos y agregamos nuevas capacidades. Cuando sea el momento, la automatizacion fisica es el paso natural.",
    duration: "Continuo",
  },
];

export const problemSolutions: ProblemSolution[] = [
  {
    problem: "Tu planta produce datos pero nadie sabe interpretarlos en tiempo real",
    solution: "Dashboard industrial conectado a PLCs y sensores con visualizacion inmediata",
  },
  {
    problem: "Pierdes clientes porque nadie contesta fuera de horario",
    solution: "Agente IA en WhatsApp que atiende 24/7 y captura leads automaticamente",
  },
  {
    problem: "Cada turno reporta diferente y no sabes el OEE real hasta el dia siguiente",
    solution: "Telemetria automatica que consolida produccion y eficiencia en tiempo real",
  },
  {
    problem: "No sabes cuanto vendiste esta semana sin preguntarle a 3 personas",
    solution: "Dashboard en tiempo real con ventas, inventario y metricas clave",
  },
  {
    problem: "Tu ERP dice una cosa, el WMS otra y la realidad del piso otra",
    solution: "Integracion de sistemas con una sola fuente de verdad para toda tu operacion",
  },
  {
    problem: "Tus sistemas no se hablan entre si y todo es manual",
    solution: "Integracion de APIs que conecta tu tienda, CRM, contabilidad y mas",
  },
];
