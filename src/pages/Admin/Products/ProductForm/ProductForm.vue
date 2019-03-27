<template>
  <form>
    <Input :value="product.value" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Input from '@/components/base/Input';

export default Vue.extend({
  components: {
    Input,
  },
  data() {
    return {
      product: {
        type: Object,
        default() {
          return {
            name: '',
          };
        },
      },
    };
  },
});
</script>

<style lang="scss">

</style>
