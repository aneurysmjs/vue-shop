<template>
  <article class="product-description">
    <header>
      <h2>
        <strong>Title</strong>
      </h2>
    </header>
    <h4>
      subtitle
    </h4>
    <p class="product-price">
      € 250,00
    </p>
    <p class="product-text">
      lorem ipsum dolor it samet neque porro
    </p>
  </article>
</template>

<script>
export default {
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
