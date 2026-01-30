'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section className='container max-w-6xl mx-auto px-4 py-24' id='contact'>
      {/* KONZISZTENS HEADER (Balra igazítva, mint a többi) */}
      <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
        <div className='space-y-2'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Let&apos;s work together <span className='text-primary'>.</span>
          </h2>
          <p className='text-muted-foreground text-lg max-w-xl'>
            Interested in building something great? Whether it&apos;s a complex backend architecture or
            an AI-driven solution.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        {/* Jobb Oldal: Űrlap (2 egység) */}
        <Card className='md:col-span-2 border-border/60 shadow-lg shadow-primary/5'>
          <CardContent className='p-2 md:p-4 space-y-4'>
            <div>
              <h3 className='font-bold text-2xl mb-2 flex items-center gap-2'>
                Send a Message
                <span className='flex h-2 w-2 rounded-full bg-primary animate-pulse'></span>
              </h3>
              <p className='text-muted-foreground'>
                Got a complex project or an engineering challenge?
              </p>
            </div>

            <div className='grid gap-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='grid gap-2'>
                  <Input
                    placeholder='Name'
                    className='h-12 bg-background/50 border-border/60 focus:border-primary/50 transition-colors'
                  />
                </div>
                <div className='grid gap-2'>
                  <Input
                    placeholder='Email'
                    type='email'
                    className='h-12 bg-background/50 border-border/60 focus:border-primary/50 transition-colors'
                  />
                </div>
              </div>

              <div className='grid gap-2'>
                <Textarea
                  placeholder='Tell me about the architecture, the scope, and the goals...'
                  className='min-h-50 bg-background/50 border-border/60 focus:border-primary/50 resize-y p-4 text-base leading-relaxed'
                />
              </div>

              <div className='flex justify-end'>
                <Link
                  href='mailto:csiszaralex@gmail.com?subject=Project Inquiry'
                  className='w-full md:w-auto'
                >
                  <Button
                    size='lg'
                    className='w-full md:w-auto gap-2 h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all'
                  >
                    Send Message
                    <Send className='w-4 h-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bal Oldal: Kontakt (1 egység) */}
        <Card className='md:col-span-1 bg-linear-to-br from-primary/5 via-background to-background border-primary/10 h-full'>
          {/* JAVÍTÁS: 'justify-center' törölve, helyette alapértelmezett (fentről indul) */}
          <CardContent className='p-8 flex flex-col h-full space-y-8'>
            <div>
              <h3 className='font-bold text-xl mb-2'>Contact Details</h3>
              <p className='text-muted-foreground text-sm'>Direct channels to reach me.</p>
            </div>

            <div className='space-y-4'>
              <Link
                href='mailto:csiszaralex@gmail.com'
                className='flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 -mx-3'
              >
                <div className='bg-background p-2 rounded-full border border-border shrink-0'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <span className='font-medium text-sm break-all'>csiszaralex@gmail.com</span>
              </Link>

              <Link
                href='https://linkedin.com/in/csalex1'
                target='_blank'
                className='flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 -mx-3'
              >
                <div className='bg-background p-2 rounded-full border border-border shrink-0'>
                  <Linkedin className='w-5 h-5 text-blue-600' />
                </div>
                <span className='font-medium text-sm'>LinkedIn Profile</span>
              </Link>

              <Link
                href='https://github.com/csiszaralex'
                target='_blank'
                className='flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 -mx-3'
              >
                <div className='bg-background p-2 rounded-full border border-border shrink-0'>
                  <Github className='w-5 h-5' />
                </div>
                <span className='font-medium text-sm'>GitHub Profile</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
