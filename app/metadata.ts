import type { Metadata } from "next";
import { company } from "@/app/siteContent";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = `${title} | ${company.shortName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      company.shortName,
      "Origin Infinity",
      "innovation with humanity",
      ...keywords,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: company.shortName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
