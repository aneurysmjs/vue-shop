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
import { mapState } from 'vuex';
import ProductCard from 'components/ProductCard';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      heading: 'Shop',
    };
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  computed: mapState(['products']),
};
</script>
