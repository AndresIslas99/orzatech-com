import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { projects } from "@/data/projects";

// Requerido por output: 'export' — la ruta se genera en build
export const dynamic = "force-static";

// Generado desde los datos en build — las páginas de proyecto nuevas entran
// solas. /pulse se excluye a propósito: su canonical apunta al subdominio y
// un sitemap solo debe listar URLs canónicas. /styleguide es noindex.
const LAST_UPDATE = new Date("2026-08-17");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/industria", "/software", "/proyectos", "/nosotros", "/contacto"];
  return [
    ...staticPages.map((path) => ({
      url: `${SITE.url}${path}/`,
      lastModified: LAST_UPDATE,
    })),
    ...projects.map((p) => ({
      url: `${SITE.url}/proyectos/${p.slug}/`,
      lastModified: LAST_UPDATE,
    })),
  ];
}
