<template>
  <section class="container-fluid admin">
    <div class="admin__wrapper">
      <Sidebar
        :title="'Dashboard'"
        :links="links"
      />
      <div class="admin__content">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import Sidebar from '@/components/core/Sidebar';

export default Vue.extend({
  components: {
    Sidebar,
  },
  data() {
    return {
      links: [
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
      ],
    };
  },
});
</script>

<style lang="scss">
  @import '~styles/mixins';
  @import '~styles/variables';

  .admin {
    height: 100vh;
    display: flex;
    flex-direction: column;

    @include element(wrapper) {
      flex-grow: 1;
    }

    @include element(content) {
      padding-left: 0;
      width: 100%;

      @include media($md){
        padding-left: 15rem;
      }
    }

  }

</style>
