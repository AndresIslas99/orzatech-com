import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AMR con Brazo Robotico",
    subtitle: "CEDIS & Logistics",
    description:
      "Robot movil autonomo con brazo integrado para picking y colocacion en almacenes. Desarrollado en Isaac Sim con ROS2.",
    image: "/images/projects/amr-robotic-arm.webp",
    tags: ["ROS2", "Isaac Sim", "NVIDIA"],
    featured: true,
    slug: "amr-brazo-robotico",
    challenge:
      "El centro de distribucion operaba con picking manual propenso a errores, generando retrabajos y retrasos en las ordenes de envio.",
    solution:
      "Desarrollamos un AMR con brazo robotico integrado, simulado en Isaac Sim y controlado via ROS2, capaz de navegar pasillos y ejecutar picking autonomo.",
    results: [
      { label: "Reduccion de errores", value: "-94%" },
      { label: "Tiempo de picking", value: "-62%" },
      { label: "Retorno de inversion", value: "18 meses" },
    ],
    duration: "5 meses",
  },
  {
    title: "Gemelo Digital de Grua",
    subtitle: "CFE - Sector Energia",
    description:
      "Sistema de monitoreo y simulacion en tiempo real para gruas industriales con visualizacion 3D y prediccion de mantenimiento.",
    image: "/images/projects/crane-digital-twin.webp",
    tags: ["Digital Twin", "Siemens", "Real-time"],
    featured: false,
    slug: "gemelo-digital-grua",
    challenge:
      "Las inspecciones presenciales de gruas en plantas de generacion eran costosas y dejaban ventanas ciegas entre visitas programadas.",
    solution:
      "Implementamos un gemelo digital con sensores IoT y visualizacion 3D en tiempo real que permite monitoreo continuo y prediccion de fallas.",
    results: [
      { label: "Inspecciones fisicas", value: "-70%" },
      { label: "Precision de alertas", value: "98%" },
      { label: "Tiempo de respuesta", value: "-85%" },
    ],
    duration: "4 meses",
  },
  {
    title: "Telemetria Industrial",
    subtitle: "Harsco Metals",
    description:
      "Sistema completo de telemetria para gruas portico con monitoreo remoto, analisis de datos y dashboards en tiempo real.",
    image: "/images/projects/gantry-crane-telemetry.webp",
    tags: ["IoT", "Telemetry", "Analytics"],
    featured: false,
    slug: "telemetria-industrial",
    challenge:
      "Los paros no programados de gruas portico impactaban la produccion sin datos claros para identificar causas raiz ni planificar mantenimiento.",
    solution:
      "Desplegamos sensores de telemetria con dashboards en tiempo real y algoritmos de deteccion de anomalias para mantenimiento predictivo.",
    results: [
      { label: "Mejora en OEE", value: "+22%" },
      { label: "Paros no programados", value: "-40%" },
      { label: "Gruas monitoreadas", value: "4" },
    ],
    duration: "3 meses",
  },
  {
    title: "Transfer Car Automatizado",
    subtitle: "Industria Metalurgica",
    description:
      "Automatizacion de carro de transferencia de 60 toneladas con control de precision y sistemas de seguridad industrial.",
    image: "/images/projects/transfer-car.webp",
    tags: ["Automation", "Heavy Industry", "Safety"],
    featured: true,
    slug: "transfer-car",
    challenge:
      "El carro de transferencia de 60 toneladas operaba manualmente, con riesgo constante de incidentes y tiempos de ciclo inconsistentes.",
    solution:
      "Automatizamos el sistema con control PLC de precision, sensores de seguridad redundantes y registro digital de cada ciclo operativo.",
    results: [
      { label: "Incidentes de seguridad", value: "0" },
      { label: "Ciclos registrados", value: "100%" },
      { label: "Tiempo de ciclo", value: "-18%" },
    ],
    duration: "2 meses",
  },
  {
    title: "Agente IA para CRM",
    subtitle: "AGNOR Dashboard",
    description:
      "Sistema de CRM potenciado con IA para seguimiento de leads, automatizacion de llamadas y analisis de conversion.",
    image: "/images/projects/ai-agent-crm.png",
    images: ["/images/projects/crm1.png", "/images/projects/crm2.png"],
    tags: ["AI Agent", "CRM", "Automation"],
    featured: true,
    slug: "agente-ia-crm",
    challenge:
      "El equipo comercial perdia leads por tiempos de respuesta lentos y seguimiento manual inconsistente en su proceso de ventas.",
    solution:
      "Creamos un agente de IA integrado al CRM que califica leads automaticamente, agenda llamadas y genera seguimientos personalizados.",
    results: [
      { label: "Leads calificados", value: "+60%" },
      { label: "Tiempo de respuesta", value: "<30s" },
      { label: "Costo por lead", value: "-45%" },
    ],
    duration: "6 semanas",
  },
  {
    title: "WMS & Fleet Management",
    subtitle: "Intralogistica",
    description:
      "Software de gestion de almacen con control de flotas de robots, planificacion de rutas y metricas de rendimiento.",
    image: "/images/projects/wms-software.webp",
    tags: ["WMS", "Fleet Control", "Siemens"],
    featured: false,
    slug: "wms-fleet-management",
    challenge:
      "La coordinacion manual de 12 AGVs generaba tiempos muertos, colisiones de rutas y baja utilizacion de la flota robotica.",
    solution:
      "Desarrollamos un WMS con modulo de fleet management que optimiza rutas en tiempo real, evita conflictos y maximiza throughput.",
    results: [
      { label: "Tiempos muertos", value: "-78%" },
      { label: "Throughput", value: "+35%" },
      { label: "AGVs coordinados", value: "12" },
    ],
    duration: "4 meses",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
