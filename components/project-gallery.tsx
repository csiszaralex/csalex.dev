'use client';

import { buttonVariants } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useState, type KeyboardEvent } from 'react';

export type GalleryImage = {
  src: StaticImageData;
  // A variant for the dark theme, e.g. a diagram with a dark background.
  darkSrc?: StaticImageData;
  // What the image shows, for screen readers.
  alt: string;
  // What it proves, shown under the image.
  caption: string;
  // The screenshot shows an app whose interface is Hungarian only.
  hungarianUi?: boolean;
};

export function ProjectGallery({
  title,
  label,
  images,
  className,
}: {
  title: string;
  // The trigger button's text, e.g. "Screenshots" or "Architecture".
  label: string;
  images: GalleryImage[];
  className?: string;
}) {
  const [index, setIndexState] = useState(0);
  // The image shown before the current one stays underneath while the new one fades in,
  // so a step cross-fades instead of flashing the empty frame.
  const [previous, setPrevious] = useState<number | null>(null);
  const image = images[index];
  const setIndex = (next: number) => {
    if (next === index) return;
    setPrevious(index);
    setIndexState(next);
  };
  const step = (by: number) => setIndex((index + by + images.length) % images.length);

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) return;
        setIndexState(0);
        setPrevious(null);
      }}
    >
      <DialogTrigger className={cn(buttonVariants({ variant: 'ghost' }), className)}>
        <Images className='w-4 h-4' />
        {label}
      </DialogTrigger>
      <DialogContent className='sm:max-w-5xl gap-3' onKeyDown={onKeyDown}>
        <DialogTitle className='flex items-center gap-2 pr-8'>
          {title}
          {/* In the title row, not on the image, where it would cover the app's UI. */}
          {image.hungarianUi && (
            <span className='rounded-full border border-border px-2 py-0.5 font-mono text-[11px] font-normal text-muted-foreground'>
              Hungarian UI
            </span>
          )}
        </DialogTitle>

        <div className='relative aspect-16/10 overflow-hidden rounded-lg bg-muted'>
          {previous !== null && (
            <ThemedImage key={`previous-${previous}`} image={images[previous]} sizes='(min-width: 1024px) 64rem, 100vw' />
          )}
          {/* The key remounts the image on every step, so each one fades in. */}
          <ThemedImage
            key={index}
            image={image}
            sizes='(min-width: 1024px) 64rem, 100vw'
            className='animate-in fade-in duration-300 motion-reduce:animate-none'
          />
        </div>

        <div className='flex items-center gap-3'>
          <DialogDescription className='grow' aria-live='polite'>
            {image.caption}
          </DialogDescription>
          {images.length > 1 && (
            <div className='flex shrink-0 items-center gap-1'>
              <button
                type='button'
                onClick={() => step(-1)}
                aria-label='Previous image'
                className={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
              >
                <ChevronLeft />
              </button>
              <span className='font-mono text-xs text-muted-foreground tabular-nums'>
                {index + 1} / {images.length}
              </span>
              <button
                type='button'
                onClick={() => step(1)}
                aria-label='Next image'
                className={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* Thumbnails: every image at a glance, so a diagram after the screenshots is not
            missed. Hidden on narrow screens, where the arrows are enough. */}
        {images.length > 1 && (
          <div className='hidden sm:flex gap-2 overflow-x-auto'>
            {images.map((thumb, i) => (
              <button
                key={thumb.src.src}
                type='button'
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'relative aspect-16/10 w-24 shrink-0 overflow-hidden rounded-md border-2 bg-muted transition-opacity',
                  i === index ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <ThemedImage image={thumb} sizes='6rem' alt='' className='object-cover' />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Renders the image, or with a dark variant both, and CSS shows the one for the theme:
// the theme class is only known in the browser. The hidden one is lazy, so it is not
// downloaded.
function ThemedImage({
  image,
  sizes,
  className,
  alt = image.alt,
}: {
  image: GalleryImage;
  sizes: string;
  className?: string;
  alt?: string;
}) {
  const variants = [
    { src: image.src, theme: image.darkSrc ? 'dark:hidden' : undefined },
    ...(image.darkSrc ? [{ src: image.darkSrc, theme: 'hidden dark:block' }] : []),
  ];
  return variants.map((variant) => (
    <Image
      key={variant.src.src}
      src={variant.src}
      alt={alt}
      fill
      sizes={sizes}
      // Static imports of raster images carry a blur preview; SVGs do not.
      placeholder={variant.src.blurDataURL ? 'blur' : 'empty'}
      className={cn('object-contain', variant.theme, className)}
    />
  ));
}
