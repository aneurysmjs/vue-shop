<template>
  <section class="container-fluid admin">
    <div class="row">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
        <Dashboard />
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from 'core/Sidebar/Sidebar';

import Dashboard from 'pages/Admin/Dashboard';

export default {
  components: {
    Sidebar,
    Dashboard,
  },
  data() {
    return {
      title: 'Admin',
    };
  },
};
</script>

<style lang="scss">
  .admin {

  }
</style>
