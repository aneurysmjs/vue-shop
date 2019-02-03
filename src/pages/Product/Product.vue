<template>
  <aside class="product"> 
    <header>
      <h2>
        NIKE
      </h2>
    </header>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-md-9 col-xl-9">
        <img 
          class="img-fluid"
          :src="product.img" alt="">
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-md-3 col-xl-3">
        img
      </div>
    </div>
  </aside>
</template>

<script>
  import products from 'assets/json/products';
  export default {
    props: {
      id: {
        type: String,
      }
    },
    data() {
      return {
        product: {

        },
      }
    },
    mounted() {
      const product = products.find(p => p.id === this.id);
      this.setProduct(product);
    },
    methods: {
      setProduct(product) {
        this.product = product;
      }
    }
  }
</script>

<style lang="scss">
  .product {
    
  }
</style>
