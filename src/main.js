import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/storeMY';

const app = createApp(App)

app

   .mount('#app')
   .use(store)





