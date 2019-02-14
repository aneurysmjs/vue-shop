<template>
  <aside class="product">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-md-9 col-xl-9">
        <figure class="product-image">
          <img
            class="img-fluid"
            :src="product.img"
            :alt="product.name"
          >
        </figure>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-md-3 col-xl-3">
        <ProductDescription :product="product" />
      </div>
    </div>
  </aside>
</template>

<script>
import api from 'api';
import ProductDescription from './ProductDescription';

export default {
  components: {
    ProductDescription,
  },
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    api.get(`/products/${id}`)
      .then((response) => {
        this.product = response.data;
      });
  }
};
</script>

<style lang="scss">
  @import '~styles/variables';
  @import '~styles/mixins';

  .product {
    padding-top: 4rem;
  }

  .product-image {
    @include flex($justify-content: center);

    @include media($lg) {
      justify-content: flex-start;
    }
  }
</style>
