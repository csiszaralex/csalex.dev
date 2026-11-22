import { siteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // The offline fallback (app/~offline) is for the service worker, not for search results.
    rules: { userAgent: '*', allow: '/', disallow: '/~offline' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
