import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Soluciones",
    href: "#",
    children: [
      { label: "Software & IA", href: "/software" },
      { label: "ORZA Pulse", href: "/pulse" },
    ],
  },
  { label: "Industria", href: "/industria" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export const mainNav = navItems;

// Flattened for footer — expands dropdown children into top-level items
export const footerNav: NavItem[] = navItems.flatMap((item) =>
  item.children ? item.children : [item]
);
