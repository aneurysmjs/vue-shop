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

<style>
.layout {
  @apply flex flex-col h-screen
}

.layout__content {
  @apply grow
}
</style>
