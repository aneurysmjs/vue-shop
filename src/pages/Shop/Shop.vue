<template>
  <section class="shop">
    <Toolbar @on-click="handleToolbarClick"></Toolbar>
    <div class="row">
       <ProductCard
          v-for="product in products"
          :key="product.id"
          :width="gridValue"
        >
        </ProductCard>
    </div>
  </section>
</template>

<script>
  import ProductCard from 'components/ProductCard';
  import Toolbar from 'components/Toolbar';

  export default {
    components: {
      ProductCard,
      Toolbar,
    },
    data() {
      return {
        gridValue: '44%',
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
    methods: {
      handleToolbarClick($event) {
        this.gridValue = `${$event}%`;
      }
    }
  }
</script>

<style lang="scss">

  .shop {
    position: relative;
  }
  
</style>


