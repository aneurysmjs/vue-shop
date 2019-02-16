<template>
  <section>
    <h1 class="display-3 text-center mt-3">
      {{ heading }}
    </h1>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :width="'45%'"
        :product="product"
        hasverlay
      />
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ProductCard from 'components/ProductCard';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      heading: 'Shop',
    };
  },
  computed: mapState(['products']),
  created() {
    this.fetchProducts();
  },
  methods: mapActions(['fetchProducts']),
};
</script>
