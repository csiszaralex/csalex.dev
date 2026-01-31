import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BarChart3, Bot, ExternalLink, Github, Lock, Server } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const projects = [
    {
      title: 'Voter System',
      category: 'High-Performance Architecture',
      description:
        'Real-time polling architecture handling high concurrency. Implements Clean Architecture with a robust NestJS backend and WebSockets.',
      tech: ['NestJS', 'TypeScript', 'WebSockets', 'CI/CD'],
      link: 'https://github.com/csiszaralex/voter',
      status: 'Latest Build',
      icon: Server,
      colorClass: 'text-cyan-500',
      bgClass: 'bg-cyan-500/10',
      borderClass: 'hover:border-cyan-500/50',
      glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]',
    },
    {
      title: 'AI Agent Orchestrator',
      category: 'R&D / Autonomous Systems',
      description:
        'Service orchestrator that dynamically registers MCP servers as callable tools. Features a dual-loop verification system for LLM accuracy.',
      tech: ['Python', 'MCP Protocol', 'Claude AI'],
      link: null,
      status: 'Research',
      icon: Bot,
      // Szín: Lila/Pink (AI & Innovation)
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-500/10',
      borderClass: 'hover:border-purple-500/50',
      glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]',
    },
    {
      title: 'Quanopt Analytics',
      category: 'Enterprise Data Pipeline',
      description:
        'Scalable backend engine processing exhibition data via Google BigQuery. Automated statistical generation and data population for chatbots.',
      tech: ['BigQuery', 'NestJS', 'GCP', 'Microservices'],
      link: null,
      status: 'Production',
      icon: BarChart3,
      // Szín: Narancs/Amber (Data & Business Value)
      colorClass: 'text-orange-500',
      bgClass: 'bg-orange-500/10',
      borderClass: 'hover:border-orange-500/50',
      glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]',
    },
  ];

  return (
    <section className='container max-w-6xl mx-auto px-4 py-24 relative' id='projects'>
      {/* Háttér dekoráció (finom gradiens folt a szekció alatt) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none' />

      <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
        <div className='space-y-2'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Selected Work
            <span className='text-primary animate-pulse'>.</span>
          </h2>
          <p className='text-muted-foreground max-w-xl text-lg'>
            Engineering solutions that balance complexity with
            <span className='text-foreground font-medium'> usability</span>.
          </p>
        </div>
        <Link href='https://github.com/csiszaralex' target='_blank'>
          <Button
            variant='outline'
            className='gap-2 group border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors'
          >
            View GitHub Profile
            <ExternalLink className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className={cn(
              'flex flex-col h-full bg-background/60 backdrop-blur-xl border-border/60 transition-all duration-300 group overflow-hidden',
              project.borderClass,
              project.glowClass,
            )}
          >
            <CardHeader className='relative'>
              {/* Halvány háttér csík a header mögött az adott színben */}
              <div
                className={cn(
                  'absolute top-0 left-0 w-full h-1 opacity-50',
                  project.bgClass.replace('/10', '/80'),
                )}
              />

              <div className='flex justify-between items-start mb-4'>
                <div
                  className={cn(
                    'p-3 rounded-xl border border-border/50 transition-colors',
                    project.bgClass,
                    project.colorClass,
                  )}
                >
                  <project.icon className='w-6 h-6' />
                </div>
                <Badge
                  variant='secondary'
                  className='font-mono text-[10px] tracking-wider uppercase opacity-70'
                >
                  {project.status}
                </Badge>
              </div>

              <CardTitle className='text-xl font-bold group-hover:text-foreground transition-colors'>
                {project.title}
              </CardTitle>
              <CardDescription
                className={cn(
                  'font-medium text-xs uppercase tracking-widest mt-1',
                  project.colorClass,
                  'opacity-80',
                )}
              >
                {project.category}
              </CardDescription>
            </CardHeader>

            <CardContent className='grow space-y-6'>
              <p className='text-muted-foreground text-sm leading-relaxed'>{project.description}</p>

              <div className='flex flex-wrap gap-2'>
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant='outline'
                    className='bg-secondary/50 hover:bg-secondary text-xs text-muted-foreground hover:text-foreground transition-colors border-border/50 cursor-default'
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className='pt-2 mt-auto'>
              {project.link ? (
                <Link href={project.link} target='_blank' className='w-full'>
                  <Button
                    variant='ghost'
                    className='w-full gap-2 font-mono text-xs h-10 border border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all'
                  >
                    <Github className='w-4 h-4' />
                    Source Code
                  </Button>
                </Link>
              ) : (
                <Button
                  variant='ghost'
                  disabled
                  className='w-full gap-2 font-mono text-xs h-10 border border-border/40 opacity-60 bg-muted/20 cursor-not-allowed'
                >
                  <Lock className='w-3 h-3' />
                  Private Repository
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
