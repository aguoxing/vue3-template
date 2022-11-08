/**
 * 系统类型声明
 */
export interface AppState {
  device: string
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
    hide: boolean
  }
  language: string
  size: string
}