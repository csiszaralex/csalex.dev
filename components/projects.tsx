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
import { GithubIcon } from '@/components/brand-icons';
import { ProjectGallery, type GalleryImage } from '@/components/project-gallery';
import { cn } from '@/lib/utils';
import hubOverview from '@/assets/projects/hub/1-overview.jpg';
import hubFocus from '@/assets/projects/hub/3-focus.jpg';
import hubMinimal from '@/assets/projects/hub/4-minimal.jpg';
import hubArchitecture from '@/assets/projects/hub/5-architecture.svg';
import hubArchitectureDark from '@/assets/projects/hub/5-architecture-dark.svg';
import bohemDashboard from '@/assets/projects/bohem/1-daily-dashboard.png';
import bohemDraft from '@/assets/projects/bohem/2-ai-draft-approval.png';
import bohemDeposits from '@/assets/projects/bohem/3-deposits-payments.png';
import bohemAds from '@/assets/projects/bohem/4-ads-daily-results.png';
import bohemOperations from '@/assets/projects/bohem/operations.png';
import bohemOperationsDark from '@/assets/projects/bohem/operations-dark.png';
import switcherList from '@/assets/projects/claudeswitcher/list.png';
import switcherQuestion from '@/assets/projects/claudeswitcher/question.png';
import switcherPeek from '@/assets/projects/claudeswitcher/peek.png';
import switcherUntil from '@/assets/projects/claudeswitcher/until.png';
import infraArchitecture from '@/assets/projects/infra/architecture.png';
import infraArchitectureDark from '@/assets/projects/infra/architecture-dark.png';
import quanoptArchitecture from '@/assets/projects/quanopt/ai-guide-platform.png';
import quanoptArchitectureDark from '@/assets/projects/quanopt/ai-guide-platform-dark.png';
import thesisRequest from '@/assets/projects/thesis/01-request-and-stages.png';
import thesisPolicy from '@/assets/projects/thesis/02-policy-and-validation.png';
import thesisExchange from '@/assets/projects/thesis/03-pdc-data-exchange.png';
import thesisArchitecture from '@/assets/projects/thesis/architecture.png';
import thesisArchitectureDark from '@/assets/projects/thesis/architecture-dark.png';
import {
  Bot,
  ExternalLink,
  LayoutDashboard,
  Lock,
  MessagesSquare,
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
  // Screenshots and diagrams, shown in a dialog; the label names the button.
  gallery: { label: string; images: GalleryImage[] } | null;
  // A short line under the buttons, e.g. why there is no source link yet.
  note?: string;
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
      "A rural event venue's back office on 60 n8n workflows: Claude pre-filters email and drafts replies that staff approve, leads land in a self-hosted CRM, deposits are tracked to payment, and a daily report ties ad spend to bookings.",
    tech: ['n8n', 'Twenty CRM', 'Claude API', 'Docker'],
    link: null,
    secondaryLink: null,
    // Screenshots: the staff app on a local mock backend, every name, email, phone number
    // (+36 30 000 00NN) and amount invented; the UI is Hungarian only. Diagram: rendered
    // from the CRM repo's crm/portfolio/ SVGs. No third-party service names in either
    // until Alex approves naming them.
    gallery: {
      label: 'Screenshots',
      images: [
        {
          src: bohemDashboard,
          hungarianUi: true,
          alt: 'Staff app "Today" view with queues of AI questions, replies to approve and bounced addresses',
          caption:
            'The daily “Today” view: incoming mail is pre-sorted into queues, with AI-drafted replies, questions from the AI and bounced addresses waiting for a human decision.',
        },
        {
          src: bohemDraft,
          hungarianUi: true,
          alt: 'An AI-drafted reply to a wedding inquiry under the guest’s original email, with an approve shortcut',
          caption:
            'An AI-drafted reply to a wedding inquiry, shown under the guest’s original email and editable before a human approves and sends it.',
        },
        {
          src: bohemDeposits,
          hungarianUi: true,
          alt: 'Finance page listing unpaid deposit requests with due dates, status tags and a “transfer arrived” button',
          caption:
            'Deposit requests that have been issued but not yet paid, with due-date warnings and a one-click “transfer arrived” action that records the payment.',
        },
        {
          src: bohemAds,
          hungarianUi: true,
          alt: 'Ads page with spend, impressions, clicks, CRM inquiries, bookings and cost per booking for each ad combination',
          caption:
            'Ad performance per image and copy combination, refreshed daily: spend, impressions and clicks, traced through to CRM inquiries, bookings and cost per booking.',
        },
        {
          src: bohemOperations,
          darkSrc: bohemOperationsDark,
          alt: 'Diagram of four automated lanes (email, inquiries, deposits, ads) feeding a self-hosted Twenty CRM with a staff web app',
          caption:
            'How the venue’s back office runs: n8n workflows feed a self-hosted Twenty CRM, Claude drafts and filters email, and staff approve every reply.',
        },
      ],
    },
    status: 'Daily use',
    icon: Workflow,
    colorClass: 'text-emerald-700 dark:text-emerald-400',
    bgClass: 'bg-emerald-500/10',
    stripeClass: 'bg-emerald-500/80',
    borderClass: 'hover:border-emerald-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]',
  },
  {
    title: 'Hub',
    category: 'Browser Extension',
    description:
      'A calm new-tab dashboard for Chrome: weather, calendar, focus timer, notes and a daily photograph. Local-first and account-free, with a serverless backend of its own for images and quotes.',
    tech: ['React', 'Vite', 'Cloudflare Workers', 'Hono'],
    link: `${githubUrl}/hub-dashboard-extension`,
    secondaryLink: { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/hub/lkkjcbdikipienbdecgeajcecopdlbdm' },
    // Images and captions come from the Hub repo (assets/portfolio/). The dark diagram
    // exists only here: the light one with its palette swapped.
    gallery: {
      label: 'Screenshots',
      images: [
        {
          src: hubOverview,
          alt: 'Hub new tab with calendar, countdown, weather, clock and a quote over a mountain photo',
          caption:
            'Everything at a glance: your next meetings, the weather, a countdown and today’s quote over a fresh photo.',
        },
        {
          src: hubFocus,
          alt: 'Hub new tab with the focus timer running at the top',
          caption:
            'One focus timer for every tab: it runs in the background and notifies you once, even with no tab open.',
        },
        {
          src: hubMinimal,
          alt: 'Hub new tab showing only the clock, the date and a quote over a forest photo',
          caption: 'Hide whatever you don’t need. With every widget off, Hub is just the time and a photograph.',
        },
        {
          src: hubArchitecture,
          darkSrc: hubArchitectureDark,
          alt: 'Architecture diagram: the Chrome extension, the Hub API Cloudflare Worker and the services each one calls',
          caption: 'Privacy by design: keys stay in the Worker; notes, calendar and location never pass through it.',
        },
      ],
    },
    status: 'Chrome Web Store',
    icon: LayoutDashboard,
    colorClass: 'text-cyan-700 dark:text-cyan-400',
    bgClass: 'bg-cyan-500/10',
    stripeClass: 'bg-cyan-500/80',
    borderClass: 'hover:border-cyan-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]',
  },
  {
    title: 'ClaudeSwitcher',
    category: 'Developer Tool',
    description:
      'A Windows tray app that lists every running Claude Code session, answers their permission prompts and questions from one place, and jumps to the right VS Code tab.',
    tech: ['Electron', 'TypeScript', 'Vitest', 'NSIS'],
    link: `${githubUrl}/ClaudeSwitcher`,
    secondaryLink: { label: 'Download for Windows', href: `${githubUrl}/ClaudeSwitcher/releases/latest` },
    // The real overlay build rendered with invented demo sessions, its Hungarian GUI text
    // translated to English. English time phrases are not parsed yet (apps/desktop/src/
    // renderer/until-time.ts reads Hungarian only); that is coming, per Alex, 2026-11-26.
    gallery: {
      label: 'Screenshots',
      images: [
        {
          src: switcherList,
          alt: 'ClaudeSwitcher overlay listing eight demo sessions with their states and a Bash permission request below',
          caption:
            'The session list: every running Claude Code session with its live state, and a Bash permission request ready to allow or deny from one place.',
        },
        {
          src: switcherQuestion,
          alt: 'ClaudeSwitcher overlay showing a multiple-choice question from a session with three options',
          caption: 'Answering a session’s multiple-choice question straight from the overlay, without switching to its VS Code window.',
        },
        {
          src: switcherPeek,
          alt: 'ClaudeSwitcher peek view of a finished session: the prompt, its tool calls and the answer',
          caption: 'Peeking into a finished session’s conversation (prompt, tool calls, answer) before jumping to it.',
        },
        {
          src: switcherUntil,
          alt: 'ClaudeSwitcher snooze field with the text "Friday afternoon" resolved to a time',
          caption:
            'Setting a session aside until a time written in plain words, parsed locally without AI, with an instant preview of the resolved time.',
        },
      ],
    },
    status: 'Active',
    icon: MonitorCog,
    colorClass: 'text-rose-700 dark:text-rose-400',
    bgClass: 'bg-rose-500/10',
    stripeClass: 'bg-rose-500/80',
    borderClass: 'hover:border-rose-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)]',
  },
  {
    title: 'Self-hosted Infrastructure',
    category: 'DevOps',
    description:
      'One Debian VM running 19 containerised services behind Traefik, pulling its configuration from git every five minutes. Secrets encrypted with sops, nightly restic backups to Cloudflare R2, admin access only over WireGuard.',
    tech: ['Docker', 'Traefik', 'WireGuard', 'sops', 'restic'],
    link: null,
    secondaryLink: null,
    // Rendered from the infra repo's docs/portfolio/ SVGs. Generic labels only: no
    // hosts, IPs, ports or service names that would map the attack surface.
    gallery: {
      label: 'Architecture',
      images: [
        {
          src: infraArchitecture,
          darkSrc: infraArchitectureDark,
          alt: 'Architecture diagram: internet and admin traffic through a firewall to Traefik and WireGuard, grouped services, a git-driven deploy timer and backups to Cloudflare R2',
          caption: 'Request, admin, redeploy and backup paths of a single-VM, git-driven Docker setup.',
        },
      ],
    },
    status: 'Production',
    icon: Server,
    colorClass: 'text-blue-700 dark:text-blue-400',
    bgClass: 'bg-blue-500/10',
    stripeClass: 'bg-blue-500/80',
    borderClass: 'hover:border-blue-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]',
  },
  {
    title: 'Data Space AI Orchestrator',
    category: 'M.S. Thesis',
    description:
      'A Claude agent that turns a free-text need into a chain of data-space services in four auditable stages, through an MCP server. A SHACL validator checks every offering; after a human signs, two Prometheus-X connectors exchange the data.',
    tech: ['Python', 'Claude API', 'MCP', 'SHACL', 'Prometheus-X'],
    link: null,
    secondaryLink: null,
    // Images and captions come from the thesis repo (portfolio/), shot on a live run.
    // The web UI is Hungarian, like the thesis.
    gallery: {
      label: 'Screenshots',
      images: [
        {
          src: thesisRequest,
          hungarianUi: true,
          alt: 'Orchestrator web UI: a free-text request and the decomposition stage with its data layers and policy',
          caption:
            'A free-text request (a company wants a training recommender built on the BME VIK course catalogue, non-commercial, EU only) broken down by Claude into data layers and a machine-readable policy.',
        },
        {
          src: thesisPolicy,
          hungarianUi: true,
          alt: 'Policy and validation stage: a table of candidates with passed rules, a VALID validator verdict and scores',
          caption:
            'The policy stage: each candidate passes the region, commercial-use, PII and catalogue-entry rules, and the semantic validator marks the course catalogue VALID.',
        },
        {
          src: thesisExchange,
          hungarianUi: true,
          alt: 'Data exchange result: verdict delivered, import success, 1,492 records and a sample of course records',
          caption:
            'After human approval and signature, two Prometheus-X connectors delivered 1,492 course records under the signed contract’s policy.',
        },
        {
          src: thesisArchitecture,
          darkSrc: thesisArchitectureDark,
          alt: 'Architecture diagram: web UI, the four-stage mediator agent, the semantic validator, the MCP server and the Prometheus-X data space',
          caption:
            'Architecture: a four-stage Claude mediator proposes the service chain, a SHACL validator checks every offering, and only after a person signs do two Prometheus-X connectors exchange the data.',
        },
      ],
    },
    note: 'Code and thesis public after the defense',
    status: 'Research',
    icon: Bot,
    colorClass: 'text-purple-700 dark:text-purple-400',
    bgClass: 'bg-purple-500/10',
    stripeClass: 'bg-purple-500/80',
    borderClass: 'hover:border-purple-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]',
  },
  {
    title: 'AI Exhibition Guide Platform',
    category: 'Quanopt · AI Backend & Analytics',
    description:
      'The backend of an exhibition guide app: a Python AI service answers visitors in text and voice behind a NestJS gateway, and a nightly job turns BigQuery visitor events into some 25 cached reports for an admin dashboard.',
    tech: ['NestJS', 'Python', 'OpenAI API', 'BigQuery'],
    link: null,
    secondaryLink: null,
    // A client project: generic labels only, no client names, data or screenshots.
    gallery: {
      label: 'Architecture',
      images: [
        {
          src: quanoptArchitecture,
          darkSrc: quanoptArchitectureDark,
          alt: 'Architecture diagram: guide and admin apps, an API gateway, an AI service, a statistics service and their data sources',
          caption:
            'A NestJS gateway fronts an async Python AI service (LLM Q&A, realtime speech, credit billing) and a statistics service that aggregates visitor events from BigQuery nightly.',
        },
      ],
    },
    status: 'Production',
    icon: MessagesSquare,
    colorClass: 'text-orange-700 dark:text-orange-400',
    bgClass: 'bg-orange-500/10',
    stripeClass: 'bg-orange-500/80',
    borderClass: 'hover:border-orange-500/50',
    glowClass: 'group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]',
  },
];

const footerButtonClass = cn(
  buttonVariants({ variant: 'ghost' }),
  'flex-1 gap-2 font-mono text-xs h-10 border border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all',
);

export function Projects() {
  return (
    <section className='container max-w-6xl mx-auto px-4 py-6 relative' id='projects'>
      {/* Háttér dekoráció (finom gradiens folt a szekció alatt) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none' />

      <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
        <div className='space-y-2'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
            Selected Work
            <span className='text-primary animate-pulse motion-reduce:animate-none'>.</span>
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
              'relative flex flex-col h-full bg-background/60 backdrop-blur-xl border-border/60 transition-all duration-300 group overflow-hidden',
              project.borderClass,
              project.glowClass,
            )}
          >
            {/* Colored stripe on the card's top edge, above the padding, so it never
                runs through the header. Full class names in the data: Tailwind only
                generates classes it finds literally. */}
            <div
              aria-hidden='true'
              className={cn('absolute inset-x-0 top-0 h-1 opacity-50', project.stripeClass)}
            />
            <CardHeader>
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
                <div className='flex items-center gap-1'>
                  {/* The source link sits here, so the footer keeps at most two buttons. */}
                  {project.link && (
                    <Link
                      href={project.link}
                      target='_blank'
                      aria-label={`${project.title} source code on GitHub`}
                      title='Source code'
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
                        'text-muted-foreground hover:text-primary',
                      )}
                    >
                      <GithubIcon className='w-4 h-4' />
                    </Link>
                  )}
                  <Badge
                    variant='secondary'
                    className='font-mono text-[10px] tracking-wider uppercase opacity-70'
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardTitle className='text-xl font-bold group-hover:text-foreground transition-colors'>
                {project.title}
              </CardTitle>
              {/* Full color, no opacity: the 12px category needs 4.5:1, and the -700/-400
                  shades in colorClass reach it on both themes. */}
              <CardDescription
                className={cn('font-medium text-xs uppercase tracking-widest mt-1', project.colorClass)}
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

            <CardFooter className='pt-2 mt-auto gap-2 flex-col items-stretch'>
              {(project.gallery || project.secondaryLink) && (
                <div className='flex gap-2'>
                  {project.gallery && (
                    <ProjectGallery
                      title={project.title}
                      label={project.gallery.label}
                      images={project.gallery.images}
                      className={footerButtonClass}
                    />
                  )}
                  {project.secondaryLink && (
                    <Link href={project.secondaryLink.href} target='_blank' className={footerButtonClass}>
                      <ExternalLink className='w-4 h-4' />
                      {project.secondaryLink.label}
                    </Link>
                  )}
                </div>
              )}
              {/* Only when the card has nothing else to show for itself. */}
              {!project.link && !project.gallery && !project.secondaryLink && (
                <Button
                  variant='ghost'
                  disabled
                  className='w-full gap-2 font-mono text-xs h-10 border border-border/40 opacity-60 bg-muted/20 cursor-not-allowed'
                >
                  <Lock className='w-3 h-3' />
                  Private Repository
                </Button>
              )}
              {project.note && (
                <p className='text-center font-mono text-[11px] text-muted-foreground'>{project.note}</p>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
