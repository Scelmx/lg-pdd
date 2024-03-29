import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ContainerWidgets from './renderers/index'
import store from './store'

const app = createApp(App)
app.use(ContainerWidgets)
app.use(store)
app.use(ElementPlus).mount('#app')