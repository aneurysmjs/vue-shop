<template>
  <section>
    <h1 class="display-3 text-center mt-3">{{heading}}</h1>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      >
        <ProductCard :width="'60%'"></ProductCard>
      </div>
    </div>
  </section>
</template>

<script>
  import ProductCard from 'components/ProductCard';

  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        heading: 'Vue Shop',
        products: [
          {
            id: 'a'
          },
          {
            id: 'b'
          },
          {
            id: 'c'
          },
          {
            id: 'd'
          }
        ]
      }
    },

    
  }
</script>