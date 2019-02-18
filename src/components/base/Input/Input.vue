<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type :[String | Number],
      default: '',
    },
  },
};
</script>

<style lang="scss">
  .input {
    
  }
</style>
