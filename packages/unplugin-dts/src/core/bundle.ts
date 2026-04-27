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

  try {
    return Extractor.invoke(config, {
      localBuild: false,
      showVerboseMessages: false,
      showDiagnostics: false,
      typescriptCompilerFolder: libFolder,
      ...invokeOptions,
    })
  } catch (error: any) {
    if (error?.message?.includes('Unable to follow symbol')) {
      const symbolMatch = error.message.match(/Unable to follow symbol for "([^"]+)"/)
      const symbol = symbolMatch ? symbolMatch[1] : 'unknown'

      throw new Error(
        `[unplugin-dts] Failed to bundle declaration files due to an API Extractor limitation ` +
          `when analyzing the symbol "${symbol}".\n\n` +
          `This is usually caused by complex type references from external packages ` +
          `(such as Vue) that API Extractor cannot resolve.\n\n` +
          `You can try the following solutions:\n` +
          `1. Update \`@microsoft/api-extractor\` to the latest version.\n` +
          `2. Ensure the TypeScript version matches what \`@microsoft/api-extractor\` uses internally.\n` +
          `3. If the symbol is from an external package, try adding it to \`bundleTypes.bundledPackages\`.\n` +
          `   For Vue projects, you can try: \`bundledPackages: ['vue']\`.\n\n` +
          `Original error: ${error.message}`,
      )
    }

    throw error
  }
}
