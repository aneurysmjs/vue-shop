<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Product } from '@/store/products/productsTypes';

const router = useRouter();

const props = defineProps<{
  hasHover?: boolean;
  hasOverlay?: boolean;
  product: Product;
  width: string;
}>();

const image = ref(props.product.img);

type ProductImageKeys = keyof Pick<Product, 'img' | 'imgHovered'>

const setProductImageType = (propName: ProductImageKeys): void => {
  image.value = props.product[propName];
};

const handleClick = () => {
  const { id } = props.product;
  router.push(`/product/${id}`);
};

const handleMouseover = (): void => {
  if (props.hasHover) {
    setProductImageType('imgHovered');
  }
};

const handleMouseleave = (): void => {
  if (props.hasHover) {
    setProductImageType('img');
  }
};
</script>

<template>
  <figure
    :class="[hasOverlay ? 'product-card--overlay' : 'product-card']"
    :style="{
      width,
      margin: '0 auto',
    }"
  >
    <div
      v-if="hasOverlay"
      class="product-card__overlay"
    />
    <img
      :src="image"
      :alt="product.name"
      class="img-fluid product-card__image"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
    >
    <figcaption
      :class="[hasOverlay ? 'product-card__description--overlay' : 'product-card__description']"
    >
      {{ product.name }}
    </figcaption>
  </figure>
</template>

<style>
.product-card {
  @apply text-center relative
}

.product-card--overlay {
  &:hover {
    .product-card__overlay {
      @apply opacity-40
    }

    .product-card__description {
      @apply opacity-100
    }
  }
}

.product-card__image {
  @apply cursor-pointer
}

.product-card__overlay {
  @apply absolute bg-black h-full left-0 opacity-0 top-0 w-full;

  transition: opacity 0.3s ease;
}

.product-card__description {
  @apply text-center text-gray-800 dark:text-white text-lg ;
}

.product-card__description--overlay {
  transition: bottom 0.3s ease;

  @apply
    absolute
    flex
    flex-col
    h-full
    items-center
    justify-center
    opacity-0
    top-0
    text-center
    text-white
    w-full;
}
</style>
