import 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    isNeedToken?: boolean
  }
}

export * from 'axios'
