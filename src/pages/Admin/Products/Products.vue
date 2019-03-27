<template>
  <section>
    <h3>{{ title }}</h3>
    <router-view />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'Products',
    };
  },
});
</script>
