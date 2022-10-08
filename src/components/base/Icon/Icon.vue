<template>
  <img
    :src="`assets/svg/icons/${name}${selected ? '-selected' : ''}.svg`"
    :style="{
      height: height ? height : '1.5rem',
      width: width ? width : '1.5rem',
    }"
    :alt="name"
    class="icon"
  />
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  selected?: boolean;
  height?: string;
  width?: string;
}>();
</script>

<style lang="scss">
.icon {
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
}
</style>
