import type { Metadata } from "next";

export const siteOrigin = new URL(process.env.SITE_URL || "https://www.netcoder.in");

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteOrigin).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: "Netcoder Technology", title, description, url },
    twitter: { card: "summary", title, description },
  };
}
