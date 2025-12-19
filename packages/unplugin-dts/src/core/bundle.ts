import { ensureAbsolute, mergeObjects, resolve, tryGetPackageInfo, tryGetPkgPath } from './utils'

import type {
  ExtractorLogLevel,
  IConfigFile,
  IExtractorInvokeOptions,
} from '@microsoft/api-extractor'
import type { BundleConfig } from './types'

export interface BundleDtsOptions {
  root: string,
  configPath?: string,
  tsconfigPath?: string,
  compilerOptions: Record<string, any>,
  outDir: string,
  entryPath: string,
  fileName: string,
  libFolder?: string,
  extractorConfig?: BundleConfig,
  bundledPackages?: string[],
  invokeOptions?: IExtractorInvokeOptions,
}

let hasExtractor: boolean | undefined

export function getHasExtractor() {
  return typeof hasExtractor !== 'undefined'
    ? hasExtractor
    : (hasExtractor = !!tryGetPackageInfo('@microsoft/api-extractor'))
}

const dtsRE = /\.d\.(m|c)?tsx?$/

export async function bundleDtsFiles({
  root,
  configPath,
  tsconfigPath,
  compilerOptions,
  outDir,
  entryPath,
  fileName,
  libFolder,
  extractorConfig = {},
  bundledPackages,
  invokeOptions = {},
}: BundleDtsOptions) {
  const { Extractor, ExtractorConfig } = await import('@microsoft/api-extractor')

  configPath = configPath ? ensureAbsolute(configPath, root) : ''
  const configObjectFullPath = configPath || resolve(root, 'api-extractor.json')

  if (!dtsRE.test(fileName)) {
    fileName += '.d.ts'
  }

  // Refer to https://github.com/microsoft/rushstack/issues/4863
  if (/preserve/i.test(compilerOptions.module)) {
    compilerOptions = { ...compilerOptions, module: 'ESNext' }
  }

  const configObject: IConfigFile = {
    bundledPackages,
    projectFolder: root,
    mainEntryPointFilePath: entryPath,
    compiler: {
      tsconfigFilePath: tsconfigPath,
      overrideTsconfig: {
        $schema: 'http://json.schemastore.org/tsconfig',
        compilerOptions,
      },
    },
    apiReport: {
      enabled: false,
      reportFileName: '<unscopedPackageName>.api.md',
    },
    docModel: {
      enabled: false,
    },
    dtsRollup: {
      enabled: true,
      publicTrimmedFilePath: resolve(outDir, fileName),
    },
    tsdocMetadata: {
      enabled: false,
    },
    messages: {
      compilerMessageReporting: {
        default: {
          logLevel: 'none' as ExtractorLogLevel.None,
        },
      },
      extractorMessageReporting: {
        default: {
          logLevel: 'none' as ExtractorLogLevel.None,
        },
      },
    },
  }

  if (configPath) {
    mergeObjects(configObject, ExtractorConfig.loadFile(configPath))
  }

  if (Object.keys(extractorConfig).length) {
    mergeObjects(configObject, extractorConfig)
  }

  const config = ExtractorConfig.prepare({
    configObject,
    configObjectFullPath,
    packageJsonFullPath: tryGetPkgPath(configObjectFullPath),
  })

  return Extractor.invoke(config, {
    localBuild: false,
    showVerboseMessages: false,
    showDiagnostics: false,
    typescriptCompilerFolder: libFolder,
    ...invokeOptions,
  })
}
