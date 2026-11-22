import { ThemeProvider } from '@/components/theme-provider';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import { darkBackground, lightBackground } from '@/lib/theme';
import type { Metadata, Viewport } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: lightBackground },
    { media: '(prefers-color-scheme: dark)', color: darkBackground },
  ],
};

// The role in the title is what search results and shared links show next to the name.
const title = `${siteName} · Software Engineer`;

export const metadata: Metadata = {
  // Resolves relative URLs (canonical, Open Graph image) to absolute ones.
  metadataBase: new URL(siteUrl),
  title,
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName,
    title,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteDescription,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteName,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

