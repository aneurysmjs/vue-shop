<template>
  <nav class="toolbar">
    <div class="toolbar__filters">
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="toolbar__button"
        @click="handleFilterClick(filter)"
      >
        <!-- <Icon
          :name="filter.icon"
          :selected="filter.id === selected"
        /> -->
        X
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Icon from '@/components/base/Icon';

import { IDataToolbar, Filter } from './toolbar.types';

export default defineComponent({
  name: 'ToolBar',
  components: {
    // Icon,
  },
  data(): IDataToolbar {
    return {
      selected: 0,
      filters: [
        {
          id: 0,
          icon: 'grid-4',
          value: '44',
        },
        {
          id: 1,
          icon: 'grid-6',
          value: '22',
        },
      ],
    };
  },
  methods: {
    handleFilterClick(filter: Filter): void {
      this.selected = filter.id;
      this.$emit('on-click', filter.value);
    },
  },
});
</script>

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
</style>
