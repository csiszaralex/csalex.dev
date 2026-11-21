import { siteDescription, siteName, siteUrl } from '@/lib/site';
import { ImageResponse } from 'next/og';

// The link preview image (LinkedIn, Slack, X…). Rendered once at build time.
export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The image renderer cannot read CSS variables or oklch(), so these are the hex
// equivalents of the dark theme's --background, --foreground and --primary
// tokens and the light theme's --primary (app/globals.css, :root and .dark).
const background = '#020511';
const foreground = '#f3faff';
const blue = '#1f8dff';
const orange = '#f45000';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background,
        backgroundImage: `radial-gradient(circle at 85% 15%, ${blue}55, transparent 45%)`,
        color: foreground,
      }}
    >
      <div style={{ display: 'flex', fontSize: 104, fontWeight: 700, letterSpacing: -3 }}>
        {siteName}
        <span style={{ color: orange }}>.</span>
      </div>
      <div style={{ display: 'flex', fontSize: 40, marginTop: 24, opacity: 0.8, maxWidth: 900 }}>
        {siteDescription}
      </div>
      <div style={{ display: 'flex', fontSize: 32, marginTop: 64, color: blue }}>
        {siteUrl.replace('https://', '')}
      </div>
    </div>,
    size,
  );
}
