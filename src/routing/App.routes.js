import Vue from 'vue';
import Router from 'vue-router';

const Home = () =>  import('pages/Home/Home');
const Shop = () =>  import('pages/Shop/Shop');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
});
