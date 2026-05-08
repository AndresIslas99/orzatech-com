import type {
  PulseProblem,
  PulseOriginEvent,
  PulseSolutionFeature,
  PulseArchLayer,
  PulseStep,
  PulseStandard,
  PulseAICapability,
  PulseROIMetric,
  PulseCompareColumn,
  PulseTimelineStep,
  PulseBenefit,
  PulseTeamStat,
  PulseBIFeature,
  PulseDashKPI,
  PulseChartBar,
  PulseInsight,
} from "@/types";

// ── Hero ──

export const pulseHeroBadge =
  "Powered by ORZA Tech — Depto. de Tecnología e IA";

export const pulseHeroTitle = {
  line1: "Asistencia técnica",
  highlight: "impulsada por IA",
  line3: "en tu mostrador.",
};

export const pulseHeroDescription =
  "Pantallas interactivas con inteligencia artificial que entienden los requerimientos técnicos de tus clientes, validan contra normativas industriales y recomiendan el producto exacto de tu inventario.";

export const pulseHeroMetrics = [
  { icon: "📊", value: "94.7%", label: "Precisión match", color: "blue" as const },
  { icon: "🔄", value: "+38%", label: "Visitas recurrentes", color: "cyan" as const },
  { icon: "⏱️", value: "2.1 min", label: "Tiempo de atención", color: "green" as const },
];

export const pulseHeroChatUser =
  "Necesito un contactor trifásico para un polipasto de 15 HP, aplicación grúa industrial clase D según CMAA.";

export const pulseHeroChatAI = {
  text: 'Para tu aplicación de polipasto clase D CMAA con motor de 15 HP, te recomiendo:',
  highlights: [
    "→ Siemens 3RT2027 · AC-3, 32A",
    "→ Cat. AC-4 para reversible",
  ],
  note: "Ref. IEC 60947-4-1 para servicio pesado.",
  stock: "3 unidades",
  validation: "Validado · CMAA Spec 70 · IEC 60947",
};

// ── Trust Bar ──

export const pulseTrustPartners = [
  "SIEMENS",
  "ABB",
  "NVIDIA",
  "UR",
  "TEC",
];

// ── Problems ──

export const pulseProblems: PulseProblem[] = [
  {
    icon: "⚠️",
    title: "Componentes erróneos",
    description:
      "Sin conocimiento de normativas como CMAA o IEC, los vendedores entregan productos inadecuados para la aplicación real del cliente, generando retrabajo costoso.",
    statValue: "~35%",
    statLabel: "de entregas requieren cambio",
  },
  {
    icon: "🚶",
    title: "Clientes que no regresan",
    description:
      "Cuando un técnico o ingeniero recibe el producto incorrecto, pierde confianza en la distribuidora y migra a competidores o compra directo a fabricantes.",
    statValue: "1 de 3",
    statLabel: "clientes no regresa tras error",
  },
  {
    icon: "🔍",
    title: "Cero visibilidad de demanda",
    description:
      "Las distribuidoras solo ven lo que se vende, no lo que se busca. No hay datos de intención de compra, productos solicitados pero no en inventario, ni patrones de consumo real.",
    statValue: "0%",
    statLabel: "captura de intención pre-compra",
  },
];

export const pulseProblemPhotos = [
  {
    src: "/images/pulse/pulse-foto1.webp",
    alt: "Mostrador de distribuidora eléctrica mexicana con estantes de componentes industriales",
  },
  {
    src: "/images/pulse/pulse-foto2.webp",
    alt: "Manos sosteniendo un contactor industrial junto a hoja de especificaciones que no coincide",
  },
  {
    src: "/images/pulse/pulse-foto3.webp",
    alt: "Ingeniero industrial revisando componente eléctrico con expresión de verificación en almacén",
  },
];

// ── Origin Story ──

export const pulseOriginEvents: PulseOriginEvent[] = [
  {
    date: "Proyecto LIMSER Cranes",
    title: "Automatización de grúas industriales",
    description:
      "ORZA Tech tomó un proyecto de automatización completa para LIMSER Cranes: digital twins, transfer cars, sistemas de control. Un proyecto donde cada componente eléctrico importa.",
  },
  {
    date: "El Dolor Operativo",
    title: "Compras que no cuadraban",
    description:
      "Cada visita a distribuidoras como Dimeint, EuroEléctrica o INASA era una moneda al aire. Solo el gerente entendía nuestros requerimientos técnicos. Los vendedores nos daban componentes que no servían, generando retrabajo constante.",
  },
  {
    date: "El Momento de Claridad",
    title: "¿Y si el conocimiento estuviera disponible siempre?",
    description:
      "Si un agente de IA pudiera entender especificaciones CMAA, IEC e IEEE igual que un ingeniero — y cruzarlas con el inventario real de la tienda — el problema desaparecería.",
  },
  {
    date: "ORZA Pulse Nace",
    title: "Del problema a la solución",
    description:
      "Nuestro departamento de Tecnología e IA desarrolló los agentes, las interfaces y la integración. ORZA Pulse no fue un producto pensado en un escritorio — fue forjado en la trinchera industrial.",
  },
];

export const pulseOriginQuote = {
  text: "Nosotros fuimos el cliente frustrado. Sabíamos exactamente qué necesitábamos y no nos lo podían dar. Ahora nos aseguramos de que ningún cliente industrial pase por eso.",
  cite: "— Equipo fundador, ORZA Tech",
};

export const pulseOriginPhotos = [
  {
    src: "/images/pulse/pulse-foto-04-crane-digital-twin.webp",
    alt: "Grúa industrial LIMSER — proyecto ORZA de automatización de grúas puente",
  },
  {
    src: "/images/pulse/pulse-foto5.webp",
    alt: "Equipo de ingenieros de ORZA en nave industrial con laptops y cascos",
  },
];

// ── Solution ──

export const pulseSolutionFeatures: PulseSolutionFeature[] = [
  {
    icon: "🎙️",
    title: "Interacción por voz y texto",
    description:
      "Pantallas con micrófono y bocina en la entrada del establecimiento. El cliente describe su necesidad de forma natural, tal como lo haría con un asesor técnico humano.",
  },
  {
    icon: "📋",
    title: "Validación normativa en tiempo real",
    description:
      "Nuestros agentes cruzan el requerimiento contra datalakes de CMAA, IEC, IEEE y fichas técnicas de fabricantes para recomendar el componente exacto.",
  },
  {
    icon: "📦",
    title: "Conexión directa a inventario",
    description:
      "El agente verifica disponibilidad en tiempo real y sugiere alternativas equivalentes cuando el producto ideal no está en stock, respetando siempre especificaciones técnicas.",
  },
  {
    icon: "🧠",
    title: "Aprendizaje continuo",
    description:
      "Cada interacción alimenta el modelo, mejorando recomendaciones y generando insights de consumo que ningún CRM tradicional puede capturar.",
  },
];

export const pulseArchLayers: PulseArchLayer[] = [
  {
    label: "Capa de interacción",
    tags: [
      { text: "Pantalla Táctil", color: "blue" },
      { text: "Micrófono", color: "blue" },
      { text: "Bocina", color: "blue" },
      { text: "Speech-to-Text", color: "blue" },
    ],
  },
  {
    label: "Motor de IA — ORZA Pulse Engine",
    tags: [
      { text: "NLP Técnico", color: "cyan" },
      { text: "Clasificador de Aplicación", color: "cyan" },
      { text: "RAG Normativo", color: "cyan" },
      { text: "Agente de Recomendación", color: "cyan" },
    ],
  },
  {
    label: "Datalakes & fuentes de datos",
    tags: [
      { text: "CMAA Specs", color: "green" },
      { text: "IEC 60947", color: "green" },
      { text: "IEEE Standards", color: "green" },
      { text: "Fichas Técnicas OEM", color: "green" },
    ],
  },
  {
    label: "Integración con distribuidora",
    tags: [
      { text: "API Inventario", color: "blue" },
      { text: "ERP/POS", color: "blue" },
      { text: "Dashboard BI", color: "blue" },
      { text: "Alertas", color: "blue" },
    ],
  },
];

// ── How It Works ──

export const pulseSteps: PulseStep[] = [
  {
    icon: "🚪",
    label: "Paso 01",
    title: "El cliente llega",
    description:
      "Al entrar al establecimiento, la pantalla ORZA Pulse lo recibe y lo invita a describir su necesidad técnica por voz o texto.",
    image: "/images/pulse/pulse-foto6.webp",
    imageAlt:
      "Kiosk digital ORZA Pulse en entrada de distribuidora eléctrica con interfaz de chat",
  },
  {
    icon: "🎯",
    label: "Paso 02",
    title: "IA comprende y valida",
    description:
      "El agente interpreta la aplicación, identifica normativas relevantes y cruza contra los datalakes técnicos para validar requerimientos.",
    image: "/images/pulse/pulse-foto7.webp",
    imageAlt:
      "Trabajador industrial interactuando con pantalla de kiosk ORZA Pulse",
  },
  {
    icon: "✅",
    label: "Paso 03",
    title: "Recomendación precisa",
    description:
      "Presenta el producto correcto del inventario con su referencia normativa, disponibilidad y alternativas equivalentes.",
    image: "/images/pulse/pulse-foto8.webp",
    imageAlt:
      "Pantalla de kiosk mostrando interfaz de recomendación de producto con chat de IA",
  },
  {
    icon: "📈",
    label: "Paso 04",
    title: "Datos accionables",
    description:
      "Cada interacción genera insights: patrones de demanda, productos faltantes, preferencias de marca y barreras de precio.",
    image: "/images/pulse/pulse-foto9.webp",
    imageAlt:
      "Dashboard BI en monitor de back-office de distribuidora con gráficas de demanda e insights de ORZA Pulse",
  },
];

// ── AI Engine ──

export const pulseStandards: PulseStandard[] = [
  {
    icon: "🏗️",
    name: "CMAA",
    description: "Crane Manufacturers Assoc. of America · Specs 70, 74, 78",
  },
  {
    icon: "⚡",
    name: "IEC",
    description: "International Electrotechnical Commission · 60947, 61439",
  },
  {
    icon: "🔌",
    name: "IEEE",
    description: "Institute of Electrical and Electronics Engineers",
  },
  {
    icon: "📄",
    name: "OEM Specs",
    description: "Fichas técnicas de Siemens, ABB, Schneider, Eaton y más",
  },
];

export const pulseAICapabilities: PulseAICapability[] = [
  {
    icon: "🔎",
    color: "blue",
    title: "RAG Normativo",
    description:
      "Retrieval-Augmented Generation sobre bases documentales técnicas. El agente busca, extrae y cita la normativa relevante para cada consulta.",
  },
  {
    icon: "🏷️",
    color: "cyan",
    title: "Clasificación de aplicación",
    description:
      "Identifica automáticamente tipo de industria, clase de servicio, condiciones ambientales y factor de uso para filtrar recomendaciones.",
  },
  {
    icon: "🔄",
    color: "blue",
    title: "Motor de equivalencias",
    description:
      "Cuando el producto ideal no está en inventario, encuentra alternativas técnicamente equivalentes respetando rangos de operación y certificaciones.",
  },
  {
    icon: "🗣️",
    color: "cyan",
    title: "NLP técnico industrial",
    description:
      "Entrenado para entender jerga técnica, abreviaciones de la industria, números de parte parciales y descripciones coloquiales de componentes.",
  },
];

// ── Business Intelligence ──

export const pulseDashKPIs: PulseDashKPI[] = [
  { value: "1,247", label: "Interacciones", color: "blue" },
  { value: "89.3%", label: "Match rate", color: "cyan" },
  { value: "+24%", label: "Conversión", color: "green" },
];

export const pulseChartBars: PulseChartBar[] = [
  { label: "Contactores", demand: 85, stock: 70 },
  { label: "Variadores", demand: 65, stock: 45 },
  { label: "Protecciones", demand: 72, stock: 72 },
  { label: "Relevadores", demand: 50, stock: 30 },
  { label: "PLC/IO", demand: 40, stock: 55 },
];

export const pulseInsights: PulseInsight[] = [
  {
    type: "alert",
    text: "Variadores 5HP Siemens — 23 consultas, 0 en stock. Oportunidad: $47,000 MXN/mes.",
  },
  {
    type: "success",
    text: "Contactores Schneider LC1D — alta conversión (92%). Producto estrella del mes.",
  },
  {
    type: "info",
    text: "Barrera de marca — 18 clientes pidieron ABB pero compraron Siemens por disponibilidad.",
  },
];

export const pulseBIFeatures: PulseBIFeature[] = [
  {
    title: "Detección de demanda invisible",
    description:
      "Identifica productos que tus clientes buscan recurrentemente pero no existen en tu inventario. Datos concretos para decisiones de compra inteligentes.",
  },
  {
    title: "Análisis de barreras de compra",
    description:
      "Entiende por qué un cliente no concretó: ¿fue precio? ¿marca? ¿disponibilidad? Cada interacción genera datos que un vendedor humano no captura.",
  },
  {
    title: "Patrones de consumo por industria",
    description:
      "Segmenta la demanda por tipo de aplicación industrial: minería, manufactura, grúas, HVAC. Anticipa tendencias y optimiza tu catálogo.",
  },
  {
    title: "Alertas proactivas",
    description:
      "Notificaciones automáticas cuando un producto supera un umbral de demanda o cuando se detecta migración de clientes a competidores.",
  },
  {
    title: "Reportes ejecutivos automáticos",
    description:
      "Dashboards y reportes periódicos con KPIs de conversión, satisfacción, demanda insatisfecha y ROI para la toma de decisiones gerencial.",
  },
];

// ── ROI ──

export const pulseROIMetrics: PulseROIMetric[] = [
  {
    value: "-72%",
    color: "green",
    metric: "Devoluciones por error",
    description:
      "Reducción drástica de productos devueltos al validar cada recomendación contra normativas técnicas antes de la venta.",
  },
  {
    value: "+38%",
    color: "blue",
    metric: "Tasa de retorno de clientes",
    description:
      "Clientes que regresan porque confían en la calidad de asesoría técnica que reciben al entrar a tu tienda.",
  },
  {
    value: "+$150K",
    color: "cyan",
    metric: "Ingresos recuperados / año",
    description:
      "Ventas que antes se perdían por falta de inventario o asesoría incorrecta, ahora capturadas con recomendaciones inteligentes.",
  },
  {
    value: "3-6 mes",
    color: "amber",
    metric: "Tiempo de payback",
    description:
      "El costo de la solución se recupera en los primeros meses a través de reducción de errores e incremento de ventas.",
  },
];

// ── Comparison ──

export const pulseCompareTraditional: PulseCompareColumn = {
  badge: "Enfoque Tradicional",
  title: "CRM + Catálogo",
  items: [
    "Solo registra ventas completadas",
    "Depende del conocimiento del vendedor",
    "Sin validación normativa",
    "No captura intención de compra",
    "Datos reactivos, no predictivos",
    "Cliente espera turno para ser atendido",
  ],
};

export const pulseComparePulse: PulseCompareColumn = {
  badge: "ORZA Pulse",
  title: "IA + Normativas + BI",
  items: [
    "Captura intención desde la primera interacción",
    "Asistencia experta 24/7 sin depender de personal",
    "Validación automática contra CMAA, IEC, IEEE",
    "Detecta demanda invisible y barreras de compra",
    "Insights predictivos para optimizar inventario",
    "Atención inmediata al cruzar la puerta",
  ],
};

// ── Timeline ──

export const pulseTimelineSteps: PulseTimelineStep[] = [
  {
    weeks: "1-2",
    title: "Diagnóstico & Integración",
    description:
      "Auditamos tu inventario, ERP y catálogo. Conectamos nuestros agentes con tus sistemas existentes.",
    tags: ["API Setup", "Data Mapping"],
  },
  {
    weeks: "3-4",
    title: "Entrenamiento del Agente",
    description:
      "Configuramos el modelo con tu catálogo específico, marcas, precios y normativas relevantes para tu segmento.",
    tags: ["Fine-tuning", "RAG Config"],
  },
  {
    weeks: "5",
    title: "Instalación Física",
    description:
      "Instalamos las pantallas, micrófonos y bocinas en tu punto de venta. Testing con clientes reales en modo piloto.",
    tags: ["Hardware", "Piloto"],
  },
  {
    weeks: "6",
    title: "Go-Live & Optimización",
    description:
      "Lanzamiento oficial con monitoreo activo. Ajustes basados en interacciones reales y retroalimentación de tu equipo.",
    tags: ["Launch", "Monitoring"],
  },
];

// ── Benefits ──

export const pulseBenefits: PulseBenefit[] = [
  {
    icon: "🎯",
    color: "blue",
    title: "Precisión en cada venta",
    description:
      "Elimina entregas erróneas validando cada recomendación contra normativas industriales. Tus clientes reciben exactamente lo que su aplicación necesita.",
  },
  {
    icon: "🔄",
    color: "cyan",
    title: "Clientes que regresan",
    description:
      "Una experiencia donde el cliente siente que fue atendido por un experto genera confianza y lealtad. Las visitas recurrentes se convierten en la norma.",
  },
  {
    icon: "📊",
    color: "green",
    title: "Decisiones basadas en datos reales",
    description:
      "Deja de adivinar qué comprar para tu inventario. Con datos de intención de compra y demanda real, cada decisión de stock se respalda con evidencia concreta.",
  },
  {
    icon: "⚡",
    color: "amber",
    title: "Ventaja competitiva inmediata",
    description:
      "Sé la primera distribuidora en tu zona con asistencia técnica por IA. Diferénciate mientras tus rivales siguen dependiendo de catálogos impresos.",
  },
];

// ── Team ──

export const pulseTeamDescription =
  "Fundada por tres socios, ORZA Tech nació en la intersección de la automatización industrial y la inteligencia artificial. Hemos diseñado digital twins para CFE, sistemas de transfer cars pesados, y AMRs con ROS2. ORZA Pulse es el resultado natural de aplicar nuestra experiencia en IA al punto exacto donde la industria encuentra la distribución.";

export const pulseTeamStats: PulseTeamStat[] = [
  { value: "3", label: "Socios fundadores" },
  { value: "15+", label: "Proyectos industriales" },
  { value: "2023", label: "Activos desde" },
];

export const pulseTeamPartners = [
  "Siemens",
  "ABB",
  "NVIDIA",
  "Universal Robots",
  "Tec de Monterrey",
  "LIMSER Cranes",
];

export const pulseTeamPhotos = [
  {
    src: "/images/pulse/pulse-foto10.webp",
    alt: "Cofundadores de ORZA en composición dual industria y oficina tecnológica",
    tall: true,
  },
  {
    src: "/images/pulse/pulse-foto-11-phase-visibility.webp",
    alt: "Centro de control — ingenieros monitoreando dashboards y sistemas industriales",
    tall: false,
  },
  {
    src: "/images/pulse/pulse-foto12.webp",
    alt: "Ingeniero de ORZA con tablet frente a tablero de control eléctrico industrial abierto",
    tall: false,
  },
];

// ── CTA Photos ──

export const pulseCTAPhotos = [
  {
    src: "/images/pulse/pulse-foto13.webp",
    alt: "Macro close-up de módulo NVIDIA Jetson Orin dentro de enclosure industrial con iluminación azul",
  },
  {
    src: "/images/pulse/pulse-foto14.webp",
    alt: "Panorámica nocturna de distribuidora eléctrica con kiosk ORZA Pulse brillando en azul",
  },
  {
    src: "/images/pulse/pulse-foto15.webp",
    alt: "Skyline panorámico de Monterrey al atardecer con Cerro de la Silla",
  },
];
