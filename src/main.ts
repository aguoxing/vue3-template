import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import '@/permission'

import './assets/styles/global.scss'
// svg图标
import 'virtual:svg-icons-register'

// 国际化
import i18n from './lang/index'

const app = createApp(App)
// 创建pinia 实例
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
