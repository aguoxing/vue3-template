import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 编辑器提示 path 模块找不到，可以yarn add @types/node --dev

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': resolve(__dirname, './'),
        // 设置别名
        '@': resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 3000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      // 代理
      proxy: {
        '/dev-api': {
          target: 'http://localhost:8088',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        }
      }
    }
  }
})
