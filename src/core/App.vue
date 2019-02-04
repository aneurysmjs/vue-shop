<template>
  <Layout />
</template>

<script>
import Layout from 'core/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
  // import Font-awesome's icons
  $fa-font-path: "~font-awesome/fonts";
  @import '~font-awesome/scss/font-awesome.scss';

  // import bootstrap.scss file
  @import '~bootstrap/scss/bootstrap.scss';

</style>
