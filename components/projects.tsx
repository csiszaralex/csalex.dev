import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { githubUrl } from '@/lib/site';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Bot,
  ExternalLink,
  Github,
  LayoutDashboard,
  Lock,
  MonitorCog,
  Server,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  // Source code; null for private repositories.
  link: string | null;
  // An extra public link, e.g. a store listing.
  secondaryLink: { label: string; href: string } | null;
  status: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  stripeClass: string;
  borderClass: string;
  glowClass: string;
};

const projects: Project[] = [
  {
    title: 'Bohém Birtok Operations',
    category: 'Business Automation',
    description:
      'The back office of a rural event venue, automated: AI pre-filters incoming email and drafts replies for human approval, inquiries and bookings land in the CRM, deposit invoices are issued and matched to payments, and a daily report tracks the ads. 50+ n8n workflows on self-hosted infrastructure.',
    tech: ['n8n', 'Twenty CRM', 'Claude API', 'Docker'],
    link: null,
    secondaryLink: null,
    status: 'Daily use',
    icon: Workflow,
    colorClass: 'text-emerald-500',
    bgClass: 'bg-emerald-500/10',
    stripeClass: 'bg-emerald-500/80',
    borderClass: 'hover:border-emerald-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]',
  },
  {
    title: 'Hub',
    category: 'Browser Extension',
    description:
      'A minimalist new-tab dashboard for Chrome: weather, calendar, focus timer, notes and a daily photograph. Local-first, with a serverless backend of its own for images and quotes.',
    tech: ['React', 'Vite', 'Cloudflare Workers', 'Hono'],
    link: 'https://github.com/csiszaralex/hub-dashboard-extension',
    secondaryLink: { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/hub/lkkjcbdikipienbdecgeajcecopdlbdm' },
    status: 'Chrome Web Store',
    icon: LayoutDashboard,
    colorClass: 'text-cyan-500',
    bgClass: 'bg-cyan-500/10',
    stripeClass: 'bg-cyan-500/80',
    borderClass: 'hover:border-cyan-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]',
  },
  {
    title: 'ClaudeSwitcher',
    category: 'Developer Tool',
    description:
      'A Windows tray app that lists every running Claude Code session, lets you answer their permission prompts from one place, and jumps to the right VS Code tab.',
    tech: ['Electron', 'TypeScript', 'Vitest', 'NSIS'],
    link: 'https://github.com/csiszaralex/ClaudeSwitcher',
    secondaryLink: null,
    status: 'Active',
    icon: MonitorCog,
    colorClass: 'text-rose-500',
    bgClass: 'bg-rose-500/10',
    stripeClass: 'bg-rose-500/80',
    borderClass: 'hover:border-rose-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)]',
  },
  {
    title: 'Self-hosted Infrastructure',
    category: 'DevOps',
    description:
      'A Debian VPS running over a dozen containerised services behind Traefik, redeployed from git every five minutes. Secrets encrypted with sops, nightly restic backups to Cloudflare R2, admin tools reachable only over WireGuard.',
    tech: ['Docker', 'Traefik', 'WireGuard', 'sops', 'restic'],
    link: null,
    secondaryLink: null,
    status: 'Production',
    icon: Server,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-500/10',
    stripeClass: 'bg-blue-500/80',
    borderClass: 'hover:border-blue-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'Data Space AI Orchestrator',
    category: 'M.S. Thesis',
    description:
      "A Claude-based mediator agent that turns a user's need into a chain of data-space services, querying the Prometheus-X catalog through an MCP server. A separate validator checks offerings in a structural and a SHACL layer.",
    tech: ['Python', 'FastAPI', 'MCP', 'Claude API'],
    link: null,
    secondaryLink: null,
    status: 'Research',
    icon: Bot,
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-500/10',
    stripeClass: 'bg-purple-500/80',
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
    secondaryLink: null,
    status: 'Production',
    icon: BarChart3,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-500/10',
    stripeClass: 'bg-orange-500/80',
    borderClass: 'hover:border-orange-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]',
  },
];

export function Projects() {
  return (
    <section className='container max-w-6xl mx-auto px-4 py-6 relative' id='projects'>
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
        <Link
          href={githubUrl}
          target='_blank'
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'gap-2 group border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors',
          )}
        >
          View GitHub Profile
          <ExternalLink className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              'flex flex-col h-full bg-background/60 backdrop-blur-xl border-border/60 transition-all duration-300 group overflow-hidden',
              project.borderClass,
              project.glowClass,
            )}
          >
            <CardHeader className='relative'>
              {/* Halvány háttér csík a header mögött az adott színben.
                  Full class name in the data: Tailwind only generates classes it finds literally. */}
              <div
                className={cn('absolute top-0 left-0 w-full h-1 opacity-50', project.stripeClass)}
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

            <CardFooter className='pt-2 mt-auto gap-2'>
              {project.secondaryLink && (
                <Link
                  href={project.secondaryLink.href}
                  target='_blank'
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'flex-1 gap-2 font-mono text-xs h-10 border border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all',
                  )}
                >
                  <ExternalLink className='w-4 h-4' />
                  {project.secondaryLink.label}
                </Link>
              )}
              {project.link ? (
                <Link
                  href={project.link}
                  target='_blank'
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'flex-1 gap-2 font-mono text-xs h-10 border border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all',
                  )}
                >
                  <Github className='w-4 h-4' />
                  Source Code
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
