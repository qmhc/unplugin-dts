declare module 'glob-to-regexp' {
  interface GlobToRegExpOptions {
    extended?: boolean,
    flags?: string,
    globstar?: boolean,
  }

  export default function globToRegExp(glob: string, options?: GlobToRegExpOptions): RegExp
}
