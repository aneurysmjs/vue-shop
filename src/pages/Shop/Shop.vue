<template>
  <section class="shop">
    <Toolbar @on-click="handleToolbarClick"></Toolbar>
    <div class="row">
       <ProductCard
          v-for="product in products"
          :key="product.id"
          :width="gridValue"
          :product="product"
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
            id: 'a',
            name: 'Nike Air Jordan',
            img: 'assets/img/nike-air-jordan-left.jpg',
            imgHovered: 'assets/img/nike-air-jordan-sideways.jpg'
          },
          {
            id: 'b',
            name: 'Nike Air Jordan',
            img: 'assets/img/nike-air-jordan-left.jpg',
            imgHovered: 'assets/img/nike-air-jordan-sideways.jpg'
          },
          {
            id: 'c',
            name: 'Nike Air Jordan',
            img: 'assets/img/nike-air-jordan-left.jpg',
            imgHovered: 'assets/img/nike-air-jordan-sideways.jpg'
          },
          {
            id: 'd',
            name: 'Nike Air Jordan',
            img: 'assets/img/nike-air-jordan-left.jpg',
            imgHovered: 'assets/img/nike-air-jordan-sideways.jpg'
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


