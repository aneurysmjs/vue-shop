const Admin = () => import('Admin/Admin.vue');
const Dashboard = () => import('Admin/Dashboard.vue');
const Products = () => import('Admin/Products.vue');
const ProductsTable = () => import('Admin/Products/ProductsTable.vue');
const Product = () => import('Admin/Products/Product.vue');

const Users = () => import('Admin/Users.vue');
const UsersTable = () => import('Admin/Users/UsersTable.vue');
const UsersForm = () => import('Admin/Users/UsersForm.vue');

export default {
  path: '/admin',
  // name: 'admin',
  component: Admin,
  children: [
    {
      path: '',
      name: 'admin',
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
      component: Users,
      children: [
        {
          path: '',
          component: UsersTable,
        },
        {
          path: 'new',
          component: UsersForm,
        },
      ],
    },
  ],
};
