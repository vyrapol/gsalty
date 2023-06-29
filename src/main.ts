import { createApp } from 'vue'
import './style.css'
import '@contextmenu/core/theme/default.css'
import './tailwind.css'
import App from './App.vue'
import draggable from "vuedraggable";


const app = createApp(App)
app.component('draggable', draggable)
app.mount('#app')
