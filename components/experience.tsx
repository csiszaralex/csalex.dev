import { Briefcase, GraduationCap } from 'lucide-react';

type Entry = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

// The same facts as the Experience, Education and Leadership sections of cv/cv.tex,
// condensed. Nothing checks that the two agree: update them together.
const work: Entry[] = [
  {
    role: 'Software Engineer',
    org: 'Quanopt Ltd. · part-time',
    period: '05/2024 – Present',
    summary:
      'One of two developers on a client’s AI exhibition-guide platform. Built the NestJS service that turns BigQuery data into statistics, led the move from Express to NestJS, and merged the repositories into a pnpm and Turborepo monorepo with an OpenAPI contract enforced in CI.',
  },
  {
    role: 'IT & Digital Operations',
    org: 'Bohém Birtok · family-run event venue, part-time',
    period: '09/2026 – Present',
    summary:
      'Run the venue’s online operation: website, analytics and ad reporting, a self-hosted CRM and the n8n workflows behind it, with an AI layer that drafts email replies for human approval.',
  },
];

const education: Entry[] = [
  {
    role: 'M.S. in Computer Engineering',
    org: 'Budapest University of Technology and Economics',
    period: '02/2025 – expected 01/2027',
    summary:
      'Thesis: an AI agent (Claude, MCP) that turns a user’s need into a validated chain of data-space services.',
  },
  {
    role: 'B.S. in Computer Engineering',
    org: 'Budapest University of Technology and Economics',
    period: '09/2021 – 01/2025',
    summary:
      'Special Prize at the 2024 Scientific Students’ Associations Conference (TDK) for a paper on collaboration patterns for trustworthy data spaces.',
  },
  {
    role: 'Head of Division',
    org: 'Schönherz Engineers & IT Students Association (SVIE)',
    period: '01/2025 – 03/2026',
    summary:
      'One of 8 division heads on the central board, sharing responsibility for the operations and finances of 52 groups.',
  },
];

export function Experience() {
  return (
    <section className='container max-w-6xl mx-auto px-4 py-6 border-t border-border/40' id='experience'>
      <div className='reveal space-y-2 mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
          Experience<span className='text-primary'>.</span>
        </h2>
        <p className='text-muted-foreground text-lg max-w-xl'>Where the projects above come from.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <Timeline title='Work' icon={Briefcase} entries={work} />
        <Timeline title='Education & Leadership' icon={GraduationCap} entries={education} />
      </div>
    </section>
  );
}

function Timeline({
  title,
  icon: Icon,
  entries,
}: {
  title: string;
  icon: typeof Briefcase;
  entries: Entry[];
}) {
  return (
    <div>
      <h3 className='reveal mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted-foreground'>
        <Icon className='w-4 h-4 text-primary' />
        {title}
      </h3>
      <ol className='relative border-l border-border/60 ml-2 space-y-8'>
        {entries.map((entry) => (
          <li key={`${entry.role}-${entry.period}`} className='reveal relative pl-6'>
            {/* The dot sits on the line: half its width left of the list's border. */}
            <span
              aria-hidden='true'
              className='absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background'
            />
            <p className='font-mono text-xs text-muted-foreground'>{entry.period}</p>
            <h4 className='mt-1 font-semibold leading-snug'>{entry.role}</h4>
            <p className='text-sm text-muted-foreground'>{entry.org}</p>
            <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{entry.summary}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
