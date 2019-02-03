<template>
  <section>
    <h1 class="display-3 text-center mt-3">{{heading}}</h1>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :width="'45%'"
        :product="product"
      >
      </ProductCard>
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

    
  }
</script>