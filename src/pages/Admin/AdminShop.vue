<script setup lang="ts">
import Sidebar from '@/components/core/Sidebar';

const links = [
  {
    path: '/admin',
    text: 'Admin',
  },
  {
    path: '/admin/products',
    text: 'Products',
  },
  {
    path: '/admin/users',
    text: 'Users',
  },
];
</script>

<template>
  <section class="container-fluid admin">
    <div class="admin__wrapper">
      <Sidebar :title="'Dashboard'" :links="links" />
      <div class="admin__content">
        <router-view />
      </div>
    </div>
  </section>
</template>

<style>

.admin {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.admin-wrapper {
  flex-grow: 1;
}

.admin-content {
  padding-left: 15rem;
  width: 100%;
}
</style>
