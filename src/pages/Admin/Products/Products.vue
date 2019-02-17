<template>
  <section>
    <h3>{{ title }}</h3>
    <ProductsTable :products="products" />
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ProductsTable from './ProductsTable';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  components: {
    ProductsTable,
  },
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
