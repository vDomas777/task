import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes.js'
import './assets/tailwind.css'
import 'flowbite';


const app = createApp(App).use(Router).mount('#app');