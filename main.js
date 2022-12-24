import { createApp } from 'vue'
import App from "./App"
import { store } from './vuex/store'
import router from './router/router'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
