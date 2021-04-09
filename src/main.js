import { createApp } from 'vue'
import router from './route'
import store from './store'
import App from './App.vue'

import './assets/style/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
