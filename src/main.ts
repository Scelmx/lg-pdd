import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Page from './components/container/Page.vue'
import Form from './components/container/Form.vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('Page', Page)
app.component('Form', Form)
app.use(ElementPlus).mount('#app')