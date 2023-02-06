/**
 * inspired by @link https://voltafootwear.com/
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/components/core/App.vue';
import FontAwesomeIcon from '@/components/base/FontAwesomeIcon';
import { router } from './router';

import './assets/css/styles.css';

const pinia = createPinia();

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router).use(pinia)
  .mount('#app');
