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
      />
    </div>
  </section>
</template>

<script>
import products from 'assets/json/products';
import ProductCard from 'components/ProductCard';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      heading: 'Vue Shop',
      products,
    };
  },
};
</script>
