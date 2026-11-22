import { siteDescription, siteName } from '@/lib/site';
import { darkBackground } from '@/lib/theme';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} Portfolio`,
    short_name: 'AlexPortfolio',
    description: siteDescription,
    start_url: '/',
    display: 'standalone',
    // The installed app opens in the dark theme's colors until the page loads.
    background_color: darkBackground,
    theme_color: darkBackground,
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
