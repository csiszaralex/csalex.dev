import { siteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

// A single-page site: the sections are anchors on the home page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }];
}
