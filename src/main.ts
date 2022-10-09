import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/components/core/App.vue';
import store from '@/store';
import { router } from './router';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(store)
  .mount('#app');
