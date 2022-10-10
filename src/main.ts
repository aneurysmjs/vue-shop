import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/components/core/App.vue';
import { router } from './router';

import './assets/css/styles.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia)
  .mount('#app');
