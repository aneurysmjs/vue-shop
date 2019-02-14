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
  </article>
</template>

<script>
export default {
  props: {
    product: {},
  },
  name: 'ProductDescription',
};

</script>

<style lang="scss">

  .product-description {
    position: relative;
  }
  .product-price {
    margin: 2rem 0;
  }
  .product-text {
    margin: 2rem 0;
  }
</style>
