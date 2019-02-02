<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from 'core/Header';

  export default {
    name: 'app',
    components: {
      Header
    }
  }

</script>

<style lang="scss">
  // import Font-awesome's icons
  $fa-font-path: "~font-awesome/fonts";
  @import '~font-awesome/scss/font-awesome.scss';

  // import bootstrap.scss file
  @import '~bootstrap/scss/bootstrap.scss';

  .app {
    padding-top: 4rem;
  }

</style>
