export const SITE = {
  name: "Orza Technologies",
  shortName: "ORZA",
  url: "https://orzatech.com",
  locale: "es_MX",
} as const;

export const CONTACT = {
  email: "sales@orzatech.com",
  phone: "+525620595320",
  phoneDisplay: "+52 56 2059 5320",
  location: "Ciudad de Mexico, MX",
  regions: "MX, US, LATAM",
} as const;

export const WHATSAPP = {
  number: "525620595320",
  defaultMessage: "Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20automatizaci%C3%B3n",
  softwareMessage: "Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20soluciones%20de%20software%20e%20IA",
  robotsMessage: "Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20robots%20de%20servicio%20para%20restaurantes",
  getUrl: (message?: string) =>
    `https://wa.me/${WHATSAPP.number}?text=${message || WHATSAPP.defaultMessage}`,
} as const;

export const FORMSPREE = {
  endpoint: "https://formspree.io/f/mgoolqdw",
} as const;

export const IMAGES = {
  logo: "/images/logo/orza-logo.webp",
  heroVideo: "/images/projects/robotic-arm-video.mp4",
  aiAgentCrm: "/images/projects/ai-agent-crm.png",
} as const;
