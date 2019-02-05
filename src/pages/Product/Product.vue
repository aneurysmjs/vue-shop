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
        <ProductDescription />
      </div>
    </div>
  </aside>
</template>

<script>
import products from 'assets/json/products';
import ProductDescription from './ProductDescription';

export default {
  components: {
    ProductDescription,
  },
  props: {
    id: {
      default: '0',
      type: String,
    },
  },
  data() {
    return {
      product: {

      },
    };
  },
  mounted() {
    const product = products.find(p => p.id === this.id);
    this.setProduct(product);
  },
  methods: {
    setProduct(product) {
      this.product = product;
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/scss/mixins/flex';

  .product {
    padding-top: 4rem;
  }

  .product-image {
    @include flex($justify-content: center);

  }
</style>
