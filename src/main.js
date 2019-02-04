import Vue from 'vue';
import App from 'core/App';
import { router } from './router';

new Vue({
  el: '#app',
  components: { 
    App
  },
  template: `<App />`,
  router
});
