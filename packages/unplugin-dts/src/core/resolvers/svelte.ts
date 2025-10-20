import { relative } from 'node:path';
import { compare } from 'compare-versions';
import { tryGetPackageInfo } from '../utils';

import type { Resolver } from './types';

const svelteRE = /\.svelte$/;

let noSvelteComponentTyped: boolean | undefined;

/**
 * Decide typing base:
 * - Svelte < 5    → SvelteComponentTyped
 * - Svelte >= 5   → SvelteComponent (no SvelteComponentTyped)
 */
function initSvelteVersionGate() {
  if (typeof noSvelteComponentTyped !== 'undefined') return;

  try {
    const version = tryGetPackageInfo('svelte')?.version;
    // If we can’t detect, default to modern (5) behavior to avoid old types in v5 projects
    noSvelteComponentTyped = version ? compare(version, '5.0.0', '>=') : true;
  } catch {
    noSvelteComponentTyped = true;
  }
}

export function SvelteResolver(): Resolver {
  // Lazy import to keep startup fast and avoid requiring svelte2tsx if not needed
  let _svelte2tsx: undefined | ((code: string, opts: any) => { code: string });

  async function ensureSvelte2Tsx() {
    if (_svelte2tsx) return _svelte2tsx;
    // eslint-disable-next-line import/no-extraneous-dependencies
    const { svelte2tsx } = await import('svelte2tsx');
    _svelte2tsx = svelte2tsx;
    return _svelte2tsx;
  }

  initSvelteVersionGate();

  return {
    name: 'svelte',
    supports(id) {
      return svelteRE.test(id);
    },
    async transform({ id, code, root }) {
      // If svelte2tsx is unavailable for some reason, fall back to the generic declaration.
      try {
        const svelte2tsx = await ensureSvelte2Tsx();

        // Detect TS script — helps svelte2tsx produce more accurate types
        const isTsFile = /<script\s+[^>]*lang\s*=\s*['"](ts|typescript)['"][^>]*>/.test(code);

        // Produce .d.ts source directly
        const out = svelte2tsx(code, {
          filename: id,
          isTsFile,
          mode: 'dts',
          noSvelteComponentTyped, // true for Svelte >=5
        });

        // svelte2tsx returns declaration-like text; we just write it
        return [
          {
            path: relative(root, `${id}.d.ts`),
            content: out.code,
          },
        ];
      } catch {
        // Fallback: keep old behavior if svelte2tsx not present
        const base =
          noSvelteComponentTyped
            ? "SvelteComponent"
            : "SvelteComponentTyped";

        return [
          {
            path: relative(root, `${id}.d.ts`),
            content: `export { ${base} as default } from 'svelte';\n`,
          },
        ];
      }
    },
  };
}