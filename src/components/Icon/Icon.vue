<template functional>
  <img
    class="icon" 
    :src="`assets/svg/icons/${props.name}${props.selected ? '-selected' : ''}.svg`"
    :alt="props.name"
  >
</template>

<style lang="scss">
  .icon {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>

