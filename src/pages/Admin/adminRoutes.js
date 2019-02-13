const Admin = () => import('pages/Admin/Admin');
const Dashboard = () => import('pages/Admin/Dashboard');
const Products = () => import('pages/Admin/Products');

export default {
  path: '/admin',
  name: 'admin',
  component: Admin,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: 'products',
      component: Products,
    },
  ],
};
