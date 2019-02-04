<template>
  <main class="layout">
    <Header />
    <div class="layout__content">
      <router-view />
    </div>
    <Footer />
  </main>
</template>


<script>
import Header from 'core/Header';
import Footer from 'core/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">

  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
  }

  .layout__content {
    flex-grow: 1;
  }

</style>
