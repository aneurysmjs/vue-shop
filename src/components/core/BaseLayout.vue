<template>
  <main class="layout">
    <BaseHeader />
    <div class="layout__content">
      <router-view />
    </div>
    <BaseFooter />
  </main>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/core/BaseHeader.vue';
import BaseFooter from '@/components/core/BaseFooter.vue';
</script>

<style lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__content {
  flex-grow: 1;
}
</style>
