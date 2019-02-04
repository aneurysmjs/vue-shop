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
import products from 'assets/json/products';
import ProductCard from 'components/ProductCard';
import Toolbar from 'components/Toolbar';

export default {
  components: {
    ProductCard,
    Toolbar,
  },
  data() {
    return {
      gridValue: '44%',
      products,
    };
  },
  methods: {
    handleToolbarClick($event) {
      this.gridValue = `${$event}%`;
    }
  }
};
</script>

<style lang="scss">

  .shop {
    position: relative;
  }
  
</style>


