// Builds and checks the CV (cv/cv.tex -> public/CV.pdf).
//
//   node scripts/cv.mjs build            compile with latexmk, copy to public/CV.pdf, verify
//   node scripts/cv.mjs check <pdf>      verify <pdf> and compare its text with public/CV.pdf
//
// `build` needs a LaTeX distribution with latexmk (MiKTeX or TeX Live); both need
// pdfinfo and pdftotext (Poppler or Xpdf). CI runs `check` on a fresh compile
// (.github/workflows/cv.yml), so a public/CV.pdf that lags behind cv.tex fails there.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Not import.meta.dirname: it needs Node 20.11, the README promises 20.9.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'cv', 'cv.tex');
const buildDir = path.join(root, 'cv', 'build');
const published = path.join(root, 'public', 'CV.pdf');

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', ...opts });
}

function pageCount(pdf) {
  const match = run('pdfinfo', [pdf]).match(/^Pages:\s+(\d+)/m);
  if (!match) throw new Error(`pdfinfo printed no page count for ${pdf}`);
  return Number(match[1]);
}

// Whitespace-normalized text, as a text extractor (and so an ATS) reads it.
function text(pdf) {
  return run('pdftotext', ['-enc', 'UTF-8', pdf, '-']).replace(/\s+/g, ' ').trim();
}

// Link targets, which the text alone does not show: a changed \href with the same
// visible text would otherwise pass the check.
function links(pdf) {
  return run('pdfinfo', ['-url', pdf])
    .split('\n')
    .slice(1)
    .map((line) => line.trim().split(/\s+/).slice(2).join(' '))
    .filter(Boolean)
    .join('\n');
}

function verify(pdf) {
  const pages = pageCount(pdf);
  if (pages !== 1) throw new Error(`${pdf} has ${pages} pages; the CV must fit on one.`);
}

const [command, arg] = process.argv.slice(2);

if (command === 'build') {
  mkdirSync(buildDir, { recursive: true });
  run('latexmk', ['-pdf', '-interaction=nonstopmode', '-halt-on-error', `-outdir=${buildDir}`, source], {
    cwd: path.dirname(source),
    stdio: 'inherit',
  });
  const built = path.join(buildDir, 'cv.pdf');
  verify(built);
  copyFileSync(built, published);
  console.log(`CV built: ${path.relative(root, published)} (1 page)`);
} else if (command === 'check' && arg) {
  verify(arg);
  if (text(arg) !== text(published) || links(arg) !== links(published)) {
    throw new Error('public/CV.pdf does not match cv/cv.tex. Run `pnpm cv` and commit public/CV.pdf.');
  }
  console.log('CV check passed: one page, public/CV.pdf matches cv/cv.tex.');
} else {
  console.error('Usage: node scripts/cv.mjs build | check <pdf>');
  process.exit(2);
}
