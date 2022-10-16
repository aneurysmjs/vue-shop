<template>
  <section>
    <p class="home__title">
      Shop
    </p>

    <div
      v-if="products.length"
      class="home__products"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        has-hover
        width="45%"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';

import { useProductsStore } from '@/store/products/useProductsStore';
import ProductCard from '@/modules/home/components/ProductCard.vue';

const productStore = useProductsStore();

onMounted(() => {
  productStore.fetchProducts();
});

const products = computed(() => productStore.getProducts);

</script>

<style>
  .home__title {
    @apply text-4xl mb-12 text-gray-800 dark:text-white;
  }

  .home__products {
    @apply flex flex-wrap
  }
</style>
