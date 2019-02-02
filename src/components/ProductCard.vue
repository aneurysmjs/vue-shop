<template>
  <figure
    :class="[hasOverlay ? 'productCard--overlay' : 'productCard']" 
    :style="{
      width,
      margin: '0 auto',
    }"
  >
    <div v-if="hasOverlay" class="productCard__overlay"></div>
    <img 
      class="img-fluid"
      src="https://street-beat.ru/upload/iblock/a85/a850121f372640b7f7e1c5d88d04a79f.jpg" 
      alt=""
    >
    <figcaption 
      :class="[hasOverlay ? 'productCard__description--overlay' : 'productCard__description']" 
    >
      Nike Air Jordan
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      width: {
        default: '29rem',
        type: String
      },
      hasOverlay: {
        default: false,
        type: Boolean,
      }
    },
  }
</script>

<style lang="scss">

  .productCard {
    position: relative;
  }

  .productCard--overlay {
    &:hover {
      .productCard__overlay {
        opacity: .4;
      }

      .productCard__description {
        opacity: 1;
      }
    }
  }

  .productCard__overlay {
    background: #000000;
    opacity: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: opacity .3s ease;
    width: 100%;
  }

  .productCard__description {
    color: #505050;
    text-align: center;
    font-size: 18px;
  }

  .productCard__description--overlay {
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    transition: bottom .3s ease;
    width: 100%;
  }
  
</style>
