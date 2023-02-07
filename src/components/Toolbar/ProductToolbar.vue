<script setup lang="ts">
import { ref } from 'vue';
// import Icon from '@/components/base/Icon';

import { IDataToolbar, Filter } from './toolbar.types';

const emit = defineEmits<{(e: 'on-click', id: string): void}>();

const selected = ref(0);

const filters = [
  {
    id: 0,
    icon: 'fa-border-all',
    value: '44',
  },
  {
    id: 1,
    icon: 'fa-grip',
    value: '22',
  },
];

const handleFilterClick = (filter: Filter): void => {
  selected.value = +filter.id;
  emit('on-click', filter.value);
};
</script>

<template>
  <nav class="toolbar">
    <div class="toolbar__filters">
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="toolbar__button"
        @click="handleFilterClick(filter)"
      >
        <font-awesome-icon
          :icon="filter.icon"
          class="toolbar__icon"
        />
      </button>
    </div>
  </nav>
</template>

<style>

.toolbar {
  @apply flex justify-end py-2;
}

.toolbar__button {
  background: none;
  margin: 0;
  border: none;
  outline: none;
  padding: 0;
  &:focus {
    border: none !important;
    outline: none !important;
  }
}

.toolbar__filters {
  @apply flex justify-evenly w-20;
}

.toolbar__icon {
  @apply font-light p-2 rounded text-gray-800;
  @apply dark:text-white;
}
</style>
