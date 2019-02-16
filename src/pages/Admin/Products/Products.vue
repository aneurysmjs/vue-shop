<template>
  <section>
    <h3>{{ title }}</h3>
    {{ products }}
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      title: 'Products!!!',
    };
  },
  computed: mapState(['products']),
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
};
</script>
