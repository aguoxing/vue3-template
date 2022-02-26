import createSvgIcon from './svg-icon'
import createCompression from './compression'
import vue from '@vitejs/plugin-vue'

export default function createVitePlugins(viteEnv: any, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
