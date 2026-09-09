import type { MetadataRoute } from "next";
import { site } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    // Buscadores e assistentes de IA liberados. Presença em resposta de
    // assistente é canal de aquisição, não bloquear.
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
