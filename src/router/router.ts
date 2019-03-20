import Vue from 'vue';
import Router from 'vue-router';

import adminRoutes from 'pages/Admin/adminRoutes';
import pageLayout from 'components/hocs/pageLayout';

const Home = () => import('pages/Home/Home');
const Shop = () => import('pages/Shop/Shop');
const Product = () => import('pages/Product');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: pageLayout(Home),
    },
    {
      path: '/shop',
      name: 'shop',
      component: pageLayout(Shop),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: pageLayout(Product),
      props: true,
    },
    adminRoutes,
  ],
});
