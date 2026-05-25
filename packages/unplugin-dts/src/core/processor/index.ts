import type ts from 'typescript'

export interface ProgramProcessor {
  createParsedCommandLine: (
    _ts: typeof ts,
    host: ts.ParseConfigHost,
    configPath: string
  ) => ts.ParsedCommandLine,
  createProgram: typeof ts.createProgram,
}

export async function loadProgramProcessor(type: 'vue' | 'ts' = 'ts'): Promise<ProgramProcessor> {
  if (type === 'vue') {
    try {
      const mod = await import('./vue.js')
      return (mod as any).default ?? mod
    } catch {
      const mod = await import('./vue')
      return (mod as any).default ?? mod
    }
  }

  try {
    const mod = await import('./ts.js')
    return (mod as any).default ?? mod
  } catch {
    const mod = await import('./ts')
    return (mod as any).default ?? mod
  }
}
