import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import draggable from "vuedraggable";
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component(draggable)
app.use(ElementPlus).mount('#app')