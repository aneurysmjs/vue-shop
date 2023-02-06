<template>
  <section class="shop">
    <Toolbar @on-click="handleToolbarClick" />
    <div class="shop__products-row">
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

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';

import ProductCard from '@/modules/home/components/ProductCard.vue';
import Toolbar from '@/components/Toolbar';
import { useProductsStore } from '@/store/products/useProductsStore';

const productStore = useProductsStore();

onMounted(() => {
  productStore.fetchProducts();
});

const products = computed(() => productStore.getProducts);
const gridValue = ref('44%');

const handleToolbarClick = (filterValue: string): void => {
  gridValue.value = `${filterValue}%`;
};
</script>

<style>
  .shop__products-row {
    @apply flex;
  }
</style>
