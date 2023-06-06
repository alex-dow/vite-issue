import { createApp } from "vue";
import App from './App.vue';
import './sass/index.scss';
import router from './router';

// Slicksort

createApp(App)
    .use(router)
    .mount('#app');