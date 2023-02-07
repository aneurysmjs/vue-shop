import { createRouter, createWebHashHistory } from 'vue-router';

import homeRoutes from '@/modules/home/routes/homeRoutes';
import productRoutes from '@/modules/product/routes/productRoutes';
import shopRoutes from '@/modules/shop/routes/shopRoutes';
import adminRoutes from '@/pages/Admin/adminRoutes';

const routes = [...homeRoutes, ...productRoutes, ...shopRoutes, adminRoutes];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
