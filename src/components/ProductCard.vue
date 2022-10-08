<template>
  <figure
    :class="[hasOverlay ? 'product-card--overlay' : 'product-card']"
    :style="{
      width,
      margin: '0 auto',
    }"
  >
    <div v-if="hasOverlay" class="product-card__overlay"></div>
    <img
      :src="image"
      :alt="product.name"
      class="img-fluid product-card__image"
      @click="handleClick"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
    />
    <figcaption
      :class="[hasOverlay ? 'product-card__description--overlay' : 'product-card__description']"
    >
      {{ product.name }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { IProduct } from '@/store/modules/products/products.types';

const router = useRouter();

const props = defineProps<{
  hasHover?: boolean;
  hasOverlay?: boolean;
  product: IProduct;
  width: string;
}>();

const image = ref(props.product.img);

const setProductImageType = (propName: keyof IProduct): void => {
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

<style lang="scss">
.product-card {
  text-align: center;
  position: relative;
}

.product-card--overlay {
  &:hover {
    .product-card__overlay {
      opacity: 0.4;
    }

    .product-card__description {
      opacity: 1;
    }
  }
}

.product-card__image {
  cursor: pointer;
}

.product-card__overlay {
  background: #000000;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
}

.product-card__description {
  color: #505050;
  text-align: center;
  font-size: 18px;
}

.product-card__description--overlay {
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 0;
  transition: bottom 0.3s ease;
  width: 100%;
}
</style>
