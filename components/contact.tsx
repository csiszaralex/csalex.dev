'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@csalex.dev';

  const [state, handleSubmit] = useForm(formId);

  return (
    <section
      className='container max-w-6xl mx-auto px-4 py-6 border-t border-border/40'
      id='contact'
    >
      {/* KONZISZTENS HEADER (Balra igazítva, mint a többi) */}
      <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-4 md:gap-6'>
        <div className='space-y-2'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Let&apos;s work together <span className='text-primary'>.</span>
          </h2>
          <p className='text-muted-foreground text-lg max-w-xl'>
            Interested in building something great? Whether it&apos;s a complex backend architecture
            or an AI-driven solution.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        {/* Jobb Oldal: Űrlap (2 egység) */}
        <Card className='md:col-span-2 border-border/60 shadow-lg shadow-primary/5'>
          <CardContent className='p-8 md:p-10'>
            {/* SIKERES KÜLDÉS UTÁNI ÁLLAPOT */}
            {state.succeeded ? (
              <div className='flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500'>
                <div className='bg-green-500/10 p-4 rounded-full text-green-500 mb-2'>
                  <CheckCircle2 className='w-12 h-12' />
                </div>
                <h3 className='text-2xl font-bold'>Message Sent!</h3>
                <p className='text-muted-foreground max-w-md'>
                  Thanks for reaching out. I&apos;ve received your message and will get back to you
                  at <strong>{contactEmail}</strong> as soon as possible.
                </p>
                <Button variant='outline' onClick={() => window.location.reload()} className='mt-6'>
                  Send another message
                </Button>
              </div>
            ) : (
              /* NORMÁL ŰRLAP ÁLLAPOT */
              <form onSubmit={handleSubmit} className='space-y-8'>
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
                      {/* Name Input */}
                      <Input
                        id='name'
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                        className='h-12 bg-background/50 border-border/60 focus:border-primary/50 transition-colors'
                      />
                      <ValidationError
                        prefix='Name'
                        field='name'
                        errors={state.errors}
                        className='text-red-500 text-xs'
                      />
                    </div>
                    <div className='grid gap-2'>
                      {/* Email Input */}
                      <Input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                        className='h-12 bg-background/50 border-border/60 focus:border-primary/50 transition-colors'
                      />
                      <ValidationError
                        prefix='Email'
                        field='email'
                        errors={state.errors}
                        className='text-red-500 text-xs'
                      />
                    </div>
                  </div>

                  <div className='grid gap-2'>
                    {/* Message Input */}
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Tell me about the architecture, the scope, and the goals...'
                      required
                      className='min-h-50 bg-background/50 border-border/60 focus:border-primary/50 resize-y p-4 text-base leading-relaxed'
                    />
                    <ValidationError
                      prefix='Message'
                      field='message'
                      errors={state.errors}
                      className='text-red-500 text-xs'
                    />
                  </div>

                  <div className='flex justify-end'>
                    <Button
                      type='submit'
                      disabled={state.submitting}
                      size='lg'
                      className='w-full md:w-auto gap-2 h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all'
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className='w-4 h-4 animate-spin' />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className='w-4 h-4' />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Bal Oldal: Kontakt (1 egység) */}
        <Card className='md:col-span-1 bg-linear-to-br from-primary/5 via-background to-background border-primary/10 h-full'>
          <CardContent className='p-8 flex flex-col h-full space-y-8'>
            <div>
              <h3 className='font-bold text-xl mb-2'>Contact Details</h3>
              <p className='text-muted-foreground text-sm'>Direct channels to reach me.</p>
            </div>

            <div className='space-y-4'>
              <Link
                href={`mailto:${contactEmail}`}
                className='flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 -mx-3'
              >
                <div className='bg-background p-2 rounded-full border border-border shrink-0'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <span className='font-medium text-sm break-all'>{contactEmail}</span>
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
