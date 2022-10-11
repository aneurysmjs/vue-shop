import { createRouter, createWebHashHistory } from 'vue-router';

// import adminRoutes from '@/pages/Admin/adminRoutes';

const Home = () => import('@/pages/Home/HomePage.vue');

// const Shop = () => import('@/pages/Shop/Shop.vue');
// const Product = () => import('@/pages/Product/Product.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/shop',
  //   name: 'shop',
  //   component: pageLayout(Shop),
  // },
  // {
  //   path: '/product/:id',
  //   name: 'product',
  //   component: pageLayout(Product),
  //   props: true,
  // },
  // adminRoutes,
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
