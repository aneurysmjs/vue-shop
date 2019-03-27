<template>
  <input
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="input"
  >
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
  },
});
</script>

<style lang="scss">
  .input {
    appearance: none;
    background: transparent;
    border-radius: 2px;
    border: 2px solid #ddd;
    position: relative;
    &:focus {
      outline:none;
    }
  }
</style>
