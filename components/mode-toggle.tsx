'use client';

import { Check, Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { buttonVariants } from '@/components/ui/button'; // Importáljuk a stílusokat
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'focus-visible:ring-0 hover:bg-transparent cursor-pointer',
        )}
      >
        <Sun className='h-[1.2rem] w-[1.2rem] text-orange-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] text-blue-500 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Toggle theme</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')} className='cursor-pointer'>
          <Sun className='mr-2 h-4 w-4 text-orange-500' />
          <span>Light</span>
          {theme === 'light' && <Check className='ml-auto h-4 w-4' />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')} className='cursor-pointer'>
          <Moon className='mr-2 h-4 w-4 text-blue-500' />
          <span>Dark</span>
          {theme === 'dark' && <Check className='ml-auto h-4 w-4' />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')} className='cursor-pointer'>
          <Laptop className='mr-2 h-4 w-4 opacity-70' />
          <span>System</span>
          {theme === 'system' && <Check className='ml-auto h-4 w-4' />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
