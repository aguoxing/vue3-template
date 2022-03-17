import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'

import './assets/styles/global.scss'
// svg图标
import 'virtual:svg-icons-register'
// import SvgIcon from '@/components/SvgIcon/index.vue'
// import elementIcons from '@/components/SvgIcon/svgicons.ts'

// markdown editor
// import mdeditor from '@/components/mdeditor/index.vue'

const app = createApp(App)
// 创建pinia 实例
const pinia = createPinia()

app.use(pinia)
app.use(router)

// app.use(ElementPlus)
// app.use(elementIcons)

// app.component('md-editor', mdeditor)
// app.component('svg-icon', SvgIcon)

app.mount('#app')
