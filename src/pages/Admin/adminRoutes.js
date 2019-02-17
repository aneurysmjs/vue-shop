const Admin = () => import('Admin/Admin');
const Dashboard = () => import('Admin/Dashboard');
const Users = () => import('Admin/Users');
const Products = () => import('Admin/Products');
const ProductsTable = () => import('Admin/Products/ProductsTable');
const Product = () => import('Admin/Products/Product');

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
      children: [
        {
          path: '',
          component: ProductsTable,
        },
        {
          path: 'new',
          component: Product,
        },
      ],
    },
    {
      path: 'users',
      name: 'users',
      component: Users,
    },
  ],
};
