<template>
  <Layout />
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './Layout.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Layout,
  },
});
</script>

<style lang="scss">
  @import '~styles/styles.scss';
  @import '~animate.css';
</style>
