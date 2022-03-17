import createSvgIcon from './svg-icon'
import createCompression from './compression'
import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createComponents from './components'

export default function createVitePlugins(viteEnv: any, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
