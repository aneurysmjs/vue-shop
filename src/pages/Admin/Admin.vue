<template>
  <section class="admin">
    <h2>{{ title }}</h2>
    <div class="row">
      <div class="col-3">
        sidebar
      </div>
      <div class="col-9">
        content
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Admin',
    };
  },
};
</script>

<style lang="scss">
  .admin {

  }
</style>
