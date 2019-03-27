<template>
  <section>
    <ProductForm />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductForm from '@/pages/Admin/Products/ProductForm';

export default Vue.extend({
  components: {
    ProductForm,
  },
});
</script>
