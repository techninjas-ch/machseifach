import type { MetadataRoute } from "next";
import { episodes, isPublished } from "@/lib/episodes";

const BASE_URL = "https://www.machseifa.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/episoden", "/ueber-uns", "/kontakt"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const episodeRoutes = episodes.filter(isPublished).map((ep) => ({
    url: `${BASE_URL}/episoden/${ep.slug}`,
    lastModified: new Date(ep.date),
  }));

  return [...staticRoutes, ...episodeRoutes];
}
