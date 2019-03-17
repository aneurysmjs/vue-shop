<template>
  <div class="spinner">
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style lang="scss">
  .spinner {
    display: inline-block;
    height: 64px;
    position: relative;
    width: 64px;
    div {
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      border-radius: 50%;
      border: 4px solid var(--primary
      );
      opacity: 1;
      position: absolute;
      &:nth-child(2) {
        animation-delay: -0.5s;
      }
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
