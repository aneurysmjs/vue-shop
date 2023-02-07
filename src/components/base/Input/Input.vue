<script>
export default {
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
};
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="value"
    class="input"
    @input="$emit('input', $event.target.value)"
  >
</template>

<style lang="scss">
.input {
  appearance: none;
  background: transparent;
  border-radius: 2px;
  border: 2px solid #ddd;
  position: relative;
  &:focus {
    outline: none;
  }
}
</style>
