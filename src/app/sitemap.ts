import type { MetadataRoute } from "next";
import { episodes, isPublished } from "@/lib/episodes";
import { blogPosts } from "@/lib/blog";
import { selbstaendigPosts } from "@/lib/selbstaendig";
import { ortsunabhaengigPosts } from "@/lib/ortsunabhaengig";
import { toolPosts } from "@/lib/tools";

const BASE_URL = "https://www.machseifa.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/episoden",
    "/blog",
    "/selbstaendig",
    "/ortsunabhaengig",
    "/tools",
    "/ueber-uns",
    "/kontakt",
  ].map((path) => ({
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

  const selbstaendigRoutes = selbstaendigPosts.map((post) => ({
    url: `${BASE_URL}/selbstaendig/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const ortsunabhaengigRoutes = ortsunabhaengigPosts.map((post) => ({
    url: `${BASE_URL}/ortsunabhaengig/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const toolRoutes = toolPosts.map((post) => ({
    url: `${BASE_URL}/tools/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    ...staticRoutes,
    ...episodeRoutes,
    ...blogRoutes,
    ...selbstaendigRoutes,
    ...ortsunabhaengigRoutes,
    ...toolRoutes,
  ];
}
