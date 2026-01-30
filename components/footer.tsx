import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-border/40 bg-background/50 backdrop-blur-sm py-12 mt-12'>
      <div className='container max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <span className='text-lg font-bold font-mono tracking-tighter'>ALEX_CSISZAR</span>
          <p className='text-sm text-muted-foreground text-center md:text-left'>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className='flex items-center gap-6'>
          <Link
            href='https://github.com/csiszaralex'
            target='_blank'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Github className='w-5 h-5' />
            <span className='sr-only'>GitHub</span>
          </Link>
          <Link
            href='https://linkedin.com/in/csalex1'
            target='_blank'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Linkedin className='w-5 h-5' />
            <span className='sr-only'>LinkedIn</span>
          </Link>
          <Link
            href='mailto:csiszaralex@gmail.com'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <Mail className='w-5 h-5' />
            <span className='sr-only'>Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
