import vue from '@vitejs/plugin-vue'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createAutoImport from './auto-import'
import createComponents from './components'
import WindiCSS from 'vite-plugin-windicss'
import createMockServer from './mock'

export default function createVitePlugins(viteEnv: any, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createMockServer())
  vitePlugins.push(WindiCSS())
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
