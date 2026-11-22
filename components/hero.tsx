import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { contactEmail } from '@/lib/site';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { siDocker, siNestjs, siNextdotjs, siPython, siTypescript, type SimpleIcon } from 'simple-icons';

export function Hero() {
  return (
    <section className='relative flex flex-col items-center justify-center overflow-hidden min-h-[calc(100vh-4rem)]'>
      {/* --- HÁTTÉR --- */}
      <div className='absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-primary/30 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none dark:mix-blend-screen' />
      <div className='absolute bottom-0 right-0 w-125 h-125 bg-blue-500/20 dark:bg-orange-500/10 blur-[100px] rounded-full pointer-events-none' />

      <div className='container max-w-5xl px-4 md:px-6 relative z-10 text-center flex flex-col items-center gap-8'>
        {/* --- STATUS BADGE --- */}
        <div className='animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none'>
          <Badge
            variant='outline'
            className='px-4 py-1.5 text-sm font-mono tracking-wide border-primary/30 bg-primary/5 text-foreground dark:text-primary rounded-full backdrop-blur-md shadow-[0_0_15px_-3px_var(--primary)]'
          >
            <span className='relative flex h-2 w-2 mr-2'>
              <span className='animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
            </span>
            Open to engineering roles from 2027
          </Badge>
        </div>

        {/* --- CÍMSOR --- */}
        <div className='space-y-4'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter'>
            Building systems that
            <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-500 to-primary dark:from-blue-400 dark:via-primary dark:to-blue-600 animate-gradient-x motion-reduce:animate-none bg-size-[200%_auto]'>
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
          <Link
            href='#projects'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300',
            )}
          >
            View Projects
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>

          <Link
            href={`mailto:${contactEmail}`}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-12 px-8 text-base font-mono rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors',
            )}
          >
            {contactEmail}
          </Link>
        </div>

        {/* --- TECH STACK (Javított) --- */}
        <div className='mt-16 pt-8 border-t border-border/60 w-full max-w-4xl'>
          <p className='text-sm font-mono text-muted-foreground mb-8 uppercase tracking-[0.2em]'>
            Powering Architectures With
          </p>

          <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
            <TechLogo icon={siTypescript} />
            <TechLogo icon={siNestjs} />
            {/* The Next.js brand color is black: follow the theme instead. */}
            <TechLogo icon={siNextdotjs} monochrome />
            <TechLogo icon={siDocker} />
            <TechLogo icon={siPython} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Brand logo from simple-icons, rendered inline: no network request, no image optimizer.
function TechLogo({ icon, monochrome = false }: { icon: SimpleIcon; monochrome?: boolean }) {
  return (
    <div className='flex flex-col items-center gap-3 group cursor-default transition-transform hover:-translate-y-1 duration-300'>
      <div className='h-12 w-12 flex items-center justify-center'>
        {/* Decorative: the visible name below labels it. */}
        <svg
          aria-hidden='true'
          viewBox='0 0 24 24'
          width={40}
          height={40}
          className='text-foreground opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300'
        >
          <path d={icon.path} fill={monochrome ? 'currentColor' : `#${icon.hex}`} />
        </svg>
      </div>
      {/* Always visible: touch screens have no hover. */}
      <span className='text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
        {icon.title}
      </span>
    </div>
  );
}
