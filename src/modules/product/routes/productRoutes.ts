const Product = () => import(/* webpackChunkName: "ProductView" */'@/modules/product/views/ProductView.vue');

const productRoutes = [
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true,
  },
];

export default productRoutes;
