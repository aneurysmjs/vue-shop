const Admin = () => import('Admin/Admin');
const Dashboard = () => import('Admin/Dashboard');
const Products = () => import('Admin/Products');
const Users = () => import('Admin/Users');

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
    {
      path: 'users',
      name: 'users',
      component: Users,
    },
  ],
};
