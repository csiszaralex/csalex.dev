'use client';

import { buttonVariants } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useState, type KeyboardEvent } from 'react';

export type GalleryImage = {
  src: StaticImageData;
  // What the image shows, for screen readers.
  alt: string;
  // What it proves, shown under the image.
  caption: string;
};

export function ProjectGallery({
  title,
  images,
  className,
}: {
  title: string;
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
        Screenshots
      </DialogTrigger>
      <DialogContent className='sm:max-w-5xl gap-3' onKeyDown={onKeyDown}>
        <DialogTitle className='pr-8'>{title}</DialogTitle>

        <div className='relative aspect-16/10 overflow-hidden rounded-lg bg-muted'>
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            sizes='(min-width: 1024px) 64rem, 100vw'
            // Static imports of raster images carry a blur preview; SVGs do not.
            placeholder={image.src.blurDataURL ? 'blur' : 'empty'}
            className='object-contain'
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
                aria-label='Previous screenshot'
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
                aria-label='Next screenshot'
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
