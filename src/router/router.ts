import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from '@/modules/home/routes/homeRoutes';
import productRoutes from '@/modules/product/routes/productRoutes';

// import adminRoutes from '@/pages/Admin/adminRoutes';
// const Shop = () => import('@/pages/Shop/Shop.vue');

const routes = [
  ...homeRoutes,
  ...productRoutes,
  // {
  //   path: '/shop',
  //   name: 'shop',
  //   component: pageLayout(Shop),
  // },
  // adminRoutes,
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
