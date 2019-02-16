<template>
  <section class="shop">
    <Toolbar @on-click="handleToolbarClick" />
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :width="gridValue"
        :product="product"
        :has-hover="true"
      />
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ProductCard from 'components/ProductCard';
import Toolbar from 'components/Toolbar';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  components: {
    ProductCard,
    Toolbar,
  },
  data() {
    return {
      gridValue: '44%',
    };
  },
  computed: mapState(['products']),
  created() {
    this.fetchProducts();
  },
  methods: {
    handleToolbarClick($event) {
      this.gridValue = `${$event}%`;
    },
    ...mapActions(['fetchProducts']),
  },
};
</script>

<style lang="scss">

  .shop {
    position: relative;
  }
</style>
