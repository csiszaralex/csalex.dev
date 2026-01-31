'use client';

import appIcon from '@/app/icon.png';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='container mx-auto flex h-16 max-w-5xl items-center justify-between px-4'>
        {/* Logo / Név - Monospace a mérnöki hatásért */}
        <Link
          href='/'
          className='font-bold text-xl tracking-tight flex items-center gap-1 hover:opacity-80 transition-opacity'
        >
          <Image
            src={appIcon}
            alt='App Logo'
            className='h-8 w-8 rounded-full object-cover border border-border/50'
          />
          {/* Minimalista Logo */}
          <span className='text-foreground'>Alex</span>
          {/* A pont színe követi a témát (Narancs/Kék) */}
          <span className='text-primary text-2xl leading-none'>.</span>
        </Link>

        {/* Jobb oldal: Ikonok + Theme Toggle */}
        <div className='flex items-center gap-2'>
          <nav className='hidden md:flex items-center gap-1 mr-4'>
            {/* Ide jöhetnének belső linkek később: Projects, About */}
          </nav>

          <div className='flex items-center gap-2 pr-4 border-r border-border/50'>
            <Link href='https://github.com/csiszaralex' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Button>
            </Link>
            <Link href='https://linkedin.com/in/csalex1' target='_blank'>
              <Button variant='ghost' size='icon'>
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
            </Link>
          </div>

          <div className='pl-2'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
