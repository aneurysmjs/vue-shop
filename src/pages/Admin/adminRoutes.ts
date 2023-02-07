const Admin = () => import('@/pages/Admin/AdminShop.vue');
const Dashboard = () => import('@/pages/Admin/AdminDashboard.vue');
const Products = () => import('@/pages/Admin/Products/Products.vue');
const ProductsTable = () => import('@/pages/Admin/Products/ProductsTable/ProductsTable.vue');
const ProductView = () => import('@/pages/Admin/Products/ProductView/ProductView.vue');
const Users = () => import('@/pages/Admin/Users/Users.vue');
const UsersTable = () => import('@/pages/Admin/Users/UsersTable/UsersTable.vue');
const UsersForm = () => import('@/pages/Admin/Users/UsersForm/UsersForm.vue');

export default {
  path: '/admin',
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
          component: ProductView,
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
