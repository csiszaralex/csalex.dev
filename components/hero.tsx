'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className='relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100vh-4rem)]'>
      {/* --- HÁTTÉR --- */}
      <div className='absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-primary/30 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none dark:mix-blend-screen' />
      <div className='absolute bottom-0 right-0 w-125 h-125 bg-blue-500/20 dark:bg-orange-500/10 blur-[100px] rounded-full pointer-events-none' />

      <div className='container max-w-5xl px-4 md:px-6 relative z-10 text-center flex flex-col items-center gap-8'>
        {/* --- STATUS BADGE --- */}
        <div className='fade-in-up'>
          <Badge
            variant='outline'
            className='px-4 py-1.5 text-sm font-mono tracking-wide border-primary/30 bg-primary/5 text-primary-foreground dark:text-primary rounded-full backdrop-blur-md shadow-[0_0_15px_-3px_var(--primary)]'
          >
            <span className='relative flex h-2 w-2 mr-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
            </span>
            Available for Founding Teams
          </Badge>
        </div>

        {/* --- CÍMSOR --- */}
        <div className='space-y-4'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter'>
            Building systems that
            <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-500 to-primary dark:from-blue-400 dark:via-primary dark:to-blue-600 animate-gradient-x bg-size-[200%_auto]'>
              survive reality.
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            I am a{' '}
            <span className='font-semibold text-foreground underline decoration-primary/50 underline-offset-4'>
              Product-Minded Engineer
            </span>
            . I bridge the gap between heavy engineering complexity and tangible business value.
          </p>
        </div>

        {/* --- GOMBOK --- */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 w-full'>
          <Link href='#projects'>
            <Button
              size='lg'
              className='h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300'
            >
              View Projects
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>

          <Link href='mailto:hello@csalex.dev'>
            <Button
              variant='outline'
              size='lg'
              className='h-12 px-8 text-base font-mono rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors'
            >
              hello@csalex.dev
            </Button>
          </Link>
        </div>

        {/* --- TECH STACK (Javított) --- */}
        <div className='mt-16 pt-8 border-t border-border/60 w-full max-w-4xl'>
          <p className='text-sm font-mono text-muted-foreground mb-8 uppercase tracking-[0.2em]'>
            Powering Architectures With
          </p>

          <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
            <TechLogo name='TypeScript' slug='typescript' color='3178C6' />
            <TechLogo name='NestJS' slug='nestjs' color='E0234E' />
            <TechLogo name='Next.js' slug='nextdotjs' color='ffffff' className='' />
            <TechLogo name='Docker' slug='docker' color='2496ED' />
            <TechLogo name='Python' slug='python' color='3776AB' />
          </div>
        </div>
      </div>
    </section>
  );
}

// Javított Segédkomponens (Image + Opacity kezelés)
function TechLogo({
  name,
  slug,
  color,
  className,
}: {
  name: string;
  slug: string;
  color?: string;
  className?: string;
}) {
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${color || ''}`;

  return (
    <div className='flex flex-col items-center gap-3 group cursor-default transition-transform hover:-translate-y-1 duration-300'>
      <div className='h-12 w-12 flex items-center justify-center relative'>
        <Image
          src={iconUrl}
          alt={name}
          width={40}
          height={40}
          className={`opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ${className}`}
          unoptimized
        />
      </div>
      <span className='text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300'>
        {name}
      </span>
    </div>
  );
}
