import withSerwistInit from '@serwist/next';
import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production',
});

const isDev = process.env.NODE_ENV === 'development';

// The pages are statically prerendered, so a per-request nonce is not possible:
// Next.js and next-themes inject inline scripts, hence 'unsafe-inline' in script-src.
// The dev server's hot reload needs 'unsafe-eval'.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  // The contact form posts to Formspree (components/contact.tsx).
  "connect-src 'self' https://formspree.io",
  "worker-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default function config(phase: string): NextConfig {
  // The build inlines NEXT_PUBLIC_* values into the bundle. Without a form ID the
  // contact form (components/contact.tsx) would ship broken and fail silently.
  // Only the build needs it: `next start` serves the already inlined value.
  if (phase === PHASE_PRODUCTION_BUILD && !process.env.NEXT_PUBLIC_FORMSPREE_ID) {
    throw new Error('NEXT_PUBLIC_FORMSPREE_ID is not set: the contact form would not work.');
  }
  return withSerwist(nextConfig);
}

