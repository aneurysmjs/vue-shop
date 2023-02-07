<script setup lang="ts">
import Input from '@/components/base/Input';

const product = {
  value: '',
};
</script>

<template>
  <form>
    <Input :value="product.value" />
  </form>
</template>

<style lang="scss"></style>
