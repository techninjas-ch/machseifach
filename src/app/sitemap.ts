import type { MetadataRoute } from "next";
import { episodes, isPublished } from "@/lib/episodes";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://www.machseifa.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/episoden", "/blog", "/ueber-uns", "/kontakt"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const episodeRoutes = episodes.filter(isPublished).map((ep) => ({
    url: `${BASE_URL}/episoden/${ep.slug}`,
    lastModified: new Date(ep.date),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...episodeRoutes, ...blogRoutes];
}
