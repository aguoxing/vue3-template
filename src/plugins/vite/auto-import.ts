import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
  return autoImport({
    imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
    dts: 'src/types/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
    resolvers: [ElementPlusResolver()]
  })
}
