export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
  specs: string[];
  icon: string;
  vertical: "industrial" | "software";
  slug: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  featured: boolean;
  slug: string;
  challenge?: string;
  solution?: string;
  results?: { label: string; value: string }[];
  duration?: string;
}

export interface Partner {
  name: string;
  logo: string;
  certified: boolean;
  category: "hardware" | "software" | "cloud";
}

export interface TechStackItem {
  name: string;
  logo: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SoftwareSubService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
}

// ── Pulse types ──

export interface PulseProblem {
  icon: string;
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
}

export interface PulseOriginEvent {
  date: string;
  title: string;
  description: string;
}

export interface PulseSolutionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PulseArchLayer {
  label: string;
  tags: { text: string; color: "blue" | "cyan" | "green" }[];
}

export interface PulseStep {
  icon: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface PulseStandard {
  icon: string;
  name: string;
  description: string;
}

export interface PulseAICapability {
  icon: string;
  color: "blue" | "cyan";
  title: string;
  description: string;
}

export interface PulseROIMetric {
  value: string;
  color: "green" | "blue" | "cyan" | "amber";
  metric: string;
  description: string;
}

export interface PulseCompareColumn {
  badge: string;
  title: string;
  items: string[];
}

export interface PulseTimelineStep {
  weeks: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PulseBenefit {
  icon: string;
  color: "blue" | "cyan" | "green" | "amber";
  title: string;
  description: string;
}

export interface PulseTeamStat {
  value: string;
  label: string;
}

export interface PulseBIFeature {
  title: string;
  description: string;
}

export interface PulseDashKPI {
  value: string;
  label: string;
  color: "blue" | "cyan" | "green";
}

export interface PulseChartBar {
  label: string;
  demand: number;
  stock: number;
}

export interface PulseInsight {
  type: "alert" | "success" | "info";
  text: string;
}
