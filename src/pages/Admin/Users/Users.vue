<template>
  <section>
    <h2>Users</h2>
    <pre>{{ users }}</pre>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('users');

export default {
  name: 'Users',
  computed: {
    ...mapState(['users']),
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
};
</script>

<style lang="scss">

</style>
