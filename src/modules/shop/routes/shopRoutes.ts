const Shop = () => import(/* webpackChunkName: "ShopView" */'@/modules/shop/views/ShopView.vue');

const shopRoutes = [
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
];

export default shopRoutes;
