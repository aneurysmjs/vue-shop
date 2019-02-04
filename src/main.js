import Vue from 'vue';
import App from 'core/App';
import router from './routing/App.routes';

new Vue({
  el: '#app',
  components: { 
    App
  },
  template: `<App />`,
  router
});
