// Points git at the repo's hooks (.githooks). Runs on `pnpm install` (the
// "prepare" script). Outside a git checkout, e.g. on Vercel, there is nothing
// to install, so a failure is ignored instead of breaking the install.
import { execFileSync } from 'node:child_process';

try {
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'ignore' });
} catch {
  // Not a git checkout: nothing to do.
}
