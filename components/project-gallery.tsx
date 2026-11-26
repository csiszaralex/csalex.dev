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
  const [index, setIndex] = useState(0);
  const image = images[index];
  const step = (by: number) => setIndex((i) => (i + by + images.length) % images.length);

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  }

  return (
    <Dialog onOpenChange={(open) => open && setIndex(0)}>
      <DialogTrigger className={cn(buttonVariants({ variant: 'ghost' }), className)}>
        <Images className='w-4 h-4' />
        {label}
      </DialogTrigger>
      <DialogContent className='sm:max-w-5xl gap-3' onKeyDown={onKeyDown}>
        <DialogTitle className='pr-8'>{title}</DialogTitle>

        <div className='relative aspect-16/10 overflow-hidden rounded-lg bg-muted'>
          {/* With a dark variant both are rendered and CSS shows the one for the theme:
              the theme class is only known in the browser. The hidden one is lazy, so it
              is not downloaded. */}
          {[
            { src: image.src, className: image.darkSrc ? 'dark:hidden' : undefined },
            ...(image.darkSrc ? [{ src: image.darkSrc, className: 'hidden dark:block' }] : []),
          ].map((variant) => (
            <Image
              key={`${index}-${variant.src.src}`}
              src={variant.src}
              alt={image.alt}
              fill
              sizes='(min-width: 1024px) 64rem, 100vw'
              // Static imports of raster images carry a blur preview; SVGs do not.
              placeholder={variant.src.blurDataURL ? 'blur' : 'empty'}
              className={cn('object-contain', variant.className)}
            />
          ))}
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
      </DialogContent>
    </Dialog>
  );
}
