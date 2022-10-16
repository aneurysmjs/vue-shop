const Home = () => import(/* webpackChunkName: "HomeView" */'@/modules/home/views/HomeView.vue');

const homeRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

export default homeRoutes;
