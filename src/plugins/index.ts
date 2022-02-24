import createSvgIcon from './svg-icon'
import vue from '@vitejs/plugin-vue'

export default function createVitePlugins(viteEnv: any, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createSvgIcon(isBuild))
  return vitePlugins
}
