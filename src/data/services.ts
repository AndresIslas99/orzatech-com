import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "software",
    title: "Software & IA",
    subtitle: "AI-Powered Solutions",
    description:
      "Dashboards conectados, agentes de IA y CRM automatizado. El primer paso antes de cualquier robot.",
    benefit:
      "Visibilidad operativa en menos de 30 dias, sin modificar tu infraestructura",
    specs: ["ROS2", "PyTorch", "REST APIs"],
    icon: "/images/icons/software-ai.webp",
    vertical: "software",
    slug: "software-ia",
  },
  {
    id: "robotics",
    title: "Brazos Roboticos",
    subtitle: "Industrial Robotics",
    description:
      "Elimina cuellos de botella y reduce costos de mano de obra hasta 60%. Paletizado, soldadura y machine tending con precision de ±0.02mm.",
    benefit:
      "ROI en menos de 18 meses con operacion 24/7 sin fatiga ni errores humanos",
    specs: ["6 ejes", "±0.02mm precision", "Operacion 24/7"],
    icon: "/images/icons/robotic-arm.webp",
    vertical: "industrial",
    slug: "brazos-roboticos",
  },
  {
    id: "agv",
    title: "AGV / AMR",
    subtitle: "Autonomous Mobile Robots",
    description:
      "Reduce colisiones y optimiza rutas sin modificar el suelo de tu almacen. Navegacion SLAM LiDAR sin infraestructura adicional.",
    benefit:
      "Elimina montacargas tripulados y reduce accidentes laborales hasta 90%",
    specs: ["1-90+ ton", "SLAM LiDAR", "SIL2 Safety"],
    icon: "/images/icons/agv.webp",
    vertical: "industrial",
    slug: "agv-amr",
  },
  {
    id: "cranes",
    title: "Automatizacion de Gruas",
    subtitle: "Crane Automation",
    description:
      "Incrementa la productividad de tus gruas hasta 40% con anti-balanceo automatico y posicionamiento de precision.",
    benefit:
      "Reduce tiempos de ciclo y elimina danos por colision en cargas criticas",
    specs: ["≥95% uptime", "PLd safety", "OPC UA"],
    icon: "/images/icons/crane.webp",
    vertical: "industrial",
    slug: "automatizacion-gruas",
  },
];
