import Vue from 'vue';
import App from 'core/App';
import { router } from './router';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App,
  },
  template: `<App />`,
  router,
});
