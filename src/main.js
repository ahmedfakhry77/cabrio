import { createApp } from 'vue'
import './style.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import App from './App.vue'

createApp(App).use(VCalendar, {}).use(Toast, {}).mount('#app')
