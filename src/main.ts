import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ContainerWidgets from './components/index'

const app = createApp(App)
app.use(ContainerWidgets)
app.use(ElementPlus).mount('#app')