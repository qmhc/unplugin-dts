import type ts from 'typescript'

export interface ProgramProcessor {
  createParsedCommandLine: (_ts: typeof ts, host: ts.ParseConfigHost, configPath: string) => ts.ParsedCommandLine,
  createProgram: typeof ts.createProgram
}

export async function loadProgramProcessor(type: 'vue' | 'ts' = 'ts'): Promise<ProgramProcessor> {
  if (type === 'vue') {
    return await import('./vue')
  }

  return await import('./ts')
}
