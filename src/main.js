import { createApp } from 'vue'
import router from './route'
import App from './App.vue'

import './assets/style/index.scss'

const app = createApp(App)
app.use(router)

app.mount('#app')
