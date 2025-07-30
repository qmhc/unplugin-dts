import { dirname } from 'node:path'

import ts from 'typescript'

export function createParsedCommandLine(_ts: typeof ts, host: ts.ParseConfigHost, configPath: string) {
  const config = ts.readJsonConfigFile(configPath, host.readFile)
  return ts.parseJsonSourceFileConfigFileContent(config, host, dirname(configPath), {}, configPath)
}

export const createProgram = ts.createProgram
