import { createApp } from '/node_modules/vue/dist/vue.esm-browser.js'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
