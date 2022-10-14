<template>
  <aside class="product">
    <div class="product__row">
      <div>
        <figure class="product-image">
          <img
            :src="product.img"
            :alt="product.name"
            class="img-fluid"
          >
        </figure>
      </div>
      <div>
        <ProductDescription :product="product" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/store/products/useProductsStore';

const userStore = useProductsStore();

const route = useRoute();

userStore.fetchProduct(route.params.id as string);

const product = computed(() => userStore.product);

</script>

<style>

.product {
  @apply pt-16
}

.product__row {
  @apply flex
}

</style>
