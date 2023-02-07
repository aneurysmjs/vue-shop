<script setup lang="ts">
import type { Product } from '@/store/products/productsTypes';

import Button from '@/components/base/BaseButton';

defineProps<{
  product: Product;
}>();

const handleAddToCart = () => {};

</script>

<template>
  <article class="product-description">
    <header>
      <h2>
        <strong>{{ product.name }}</strong>
      </h2>
    </header>
    <h4>
      {{ product.shop }}
    </h4>
    <p class="product-price">
      {{ product.price }}
    </p>
    <p class="product-text">
      {{ product.description }}
    </p>
    <div>
      <Button
        primary
        @click="handleAddToCart"
      >
        Add To Cart
      </Button>
    </div>
  </article>
</template>

<style>
.product-description {
  @apply relative
}

.product-price {
  @apply my-8
}

.product-text {
  @apply my-8
}
</style>
