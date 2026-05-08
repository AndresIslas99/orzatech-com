import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}

const baseKeywords = [
  "automatizacion industrial",
  "robotica",
  "Mexico",
  "Orza Technologies",
];

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const canonicalPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const url = `${SITE.url}${canonicalPath}`;
  const deduplicatedKeywords = [...new Set([...keywords, ...baseKeywords])];
  const ogImage = `${SITE.url}/images/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: deduplicatedKeywords,
    authors: [{ name: SITE.name }],
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
