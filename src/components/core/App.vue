<template>
  <main>
    <Nofitications />
    <Layout />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Nofitications from '@/components/shared/Nofitications';
import Layout from './Layout.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Nofitications,
    Layout,
  },
});
</script>

<style lang="scss">
  @import '~styles/styles.scss';
  @import '~animate.css';
</style>
