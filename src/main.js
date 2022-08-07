import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AudioVisual from 'vue-audio-visual'
import './styles/index.css'

createApp(App).use(store).use(router).use(AudioVisual).mount('#app')
