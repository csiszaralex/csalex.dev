import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Download, Globe, Layers, Server } from 'lucide-react';
import Link from 'next/link';

export function About() {
  return (
    <section
      className='container max-w-6xl mx-auto px-4 py-24 border-t border-border/40'
      id='about'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* --- BAL OLDAL: BEMUTATKOZÁS --- */}
        <div className='space-y-8'>
          {/* KONZISZTENS HEADER */}
          <div className='space-y-2'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2'>
              About Me <span className='text-primary'>.</span>
            </h2>
            <p className='text-muted-foreground text-lg max-w-xl'>
              Engineering philosophy and background.
            </p>
          </div>

          <div className='prose dark:prose-invert text-muted-foreground leading-relaxed space-y-4'>
            <p>
              I am currently pursuing my <strong>M.S. in Computer Engineering</strong> at the
              Budapest University of Technology and Economics (BME). My journey started with a
              curiosity for how things work, which quickly evolved into a passion for building
              scalable architectures.
            </p>
            <p>
              As a <strong>Pragmatic Architect</strong>, I focus on the balance between code quality
              and delivery speed. I don&apos;t just write code; I design systems that are maintainable,
              efficient, and solve real business problems. Whether it&apos;s a high-throughput backend in{' '}
              <strong>NestJS</strong> or an autonomous AI agent, my goal is always the same:
              creating tangible value through engineering.
            </p>
          </div>

          <div className='pt-2'>
            <Link href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
              <Button className='gap-2 rounded-full px-6 shadow-lg shadow-primary/10 hover:shadow-primary/20 h-12'>
                <Download className='w-4 h-4' />
                Download CV
              </Button>
            </Link>
          </div>
        </div>

        {/* --- JOBB OLDAL: TECH STACK --- */}
        <div className='space-y-6 pt-2'>
          <div className='flex items-center gap-2 mb-4'>
            <Code className='w-5 h-5 text-primary' />
            <h3 className='text-lg font-bold'>Technical Arsenal</h3>
          </div>

          <div className='grid gap-4'>
            {/* Backend */}
            <Card className='bg-background/50 backdrop-blur border-border/60 hover:border-primary/20 transition-colors'>
              <CardHeader className='py-3 px-4'>
                <CardTitle className='text-sm font-medium flex items-center gap-2 text-foreground/80'>
                  <Server className='w-4 h-4 text-blue-500' />
                  Backend & Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4 pb-3 flex flex-wrap gap-2'>
                {['TypeScript', 'NestJS', 'Node.js', 'Python', 'FastAPI', 'Go'].map((s) => (
                  <Badge
                    key={s}
                    variant='secondary'
                    className='bg-blue-500/5 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 font-normal'
                  >
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* AI & Data */}
            <Card className='bg-background/50 backdrop-blur border-border/60 hover:border-primary/20 transition-colors'>
              <CardHeader className='py-3 px-4'>
                <CardTitle className='text-sm font-medium flex items-center gap-2 text-foreground/80'>
                  <Layers className='w-4 h-4 text-purple-500' />
                  AI & Data Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4 pb-3 flex flex-wrap gap-2'>
                {[
                  'Google BigQuery',
                  'LangChain',
                  'MCP Protocol',
                  'PostgreSQL',
                  'Redis',
                  'Vector DBs',
                ].map((s) => (
                  <Badge
                    key={s}
                    variant='secondary'
                    className='bg-purple-500/5 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 font-normal'
                  >
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Infra */}
            <Card className='bg-background/50 backdrop-blur border-border/60 hover:border-primary/20 transition-colors'>
              <CardHeader className='py-3 px-4'>
                <CardTitle className='text-sm font-medium flex items-center gap-2 text-foreground/80'>
                  <Globe className='w-4 h-4 text-orange-500' />
                  DevOps & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4 pb-3 flex flex-wrap gap-2'>
                {['Docker', 'Linux', 'Nginx', 'CI/CD', 'Self-hosting', 'Git'].map((s) => (
                  <Badge
                    key={s}
                    variant='secondary'
                    className='bg-orange-500/5 text-orange-600 dark:text-orange-400 hover:bg-orange-500/10 font-normal'
                  >
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
