<template>
  <div
    :style="{
      height,
      width,
    }"
    class="spinner"
  >
    <div class="spinner__outer-circle" />
    <div class="spinner__inner-circle" />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    height: {
      type: [String, Number],
      default: '64px',
    },
    width: {
      type: [String, Number],
      default: '64px',
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .spinner {
    display: inline-block;
    position: relative;

    @include element(outer-circle) {
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      border-radius: 50%;
      border: 4px solid var(--primary);
      opacity: 1;
      position: absolute;
    }

    @include element(inner-circle) {
      animation-delay: -0.5s;
    }
  }

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
</style>
