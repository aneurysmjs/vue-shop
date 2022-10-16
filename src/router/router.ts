import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from '@/modules/home/routes/homeRoutes';

// import adminRoutes from '@/pages/Admin/adminRoutes';

// const Shop = () => import('@/pages/Shop/Shop.vue');
const Product = () => import('@/pages/Product/ProductPage.vue');

const routes = [
  ...homeRoutes,
  // {
  //   path: '/shop',
  //   name: 'shop',
  //   component: pageLayout(Shop),
  // },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true,
  },
  // adminRoutes,
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
