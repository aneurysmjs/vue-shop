<template>
  <header class="header">
    <NavBar />
  </header>
</template>

<script>
import NavBar from 'core/NavBar';

export default {
  name: 'Header',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">

  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

</style>
