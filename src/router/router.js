import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('pages/Home/Home');
const Shop = () => import('pages/Shop/Shop');
const Product = () => import('pages/Product');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      props: true,
    },
  ],
});
