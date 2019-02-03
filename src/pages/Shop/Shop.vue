<template>
  <section class="shop">
    <nav class="shop__toolbar">
      <div class="shop__toolbar__filters">
        <Icon name="grid-4" />
        <Icon name="grid-6" />
      </div>
    </nav>
    <div class="row">
       <ProductCard
          v-for="product in products"
          :key="product.id"
          :width="'22%'"
        >
        </ProductCard>
    </div>
  </section>
</template>

<script>
  import Icon from 'components/Icon';
  import ProductCard from 'components/ProductCard';

  export default {
    components: {
      ProductCard,
      Icon,
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

<style lang="scss">
  @import '../../assets/scss/mixins/flex';

  .shop {
    position: relative;
  }
  .shop__toolbar {
    display: flex;
    justify-content: flex-end;
  }
  .shop__toolbar__filters {
    @include flex($justify-content: space-evenly);
    width: 5rem;
  }
</style>


