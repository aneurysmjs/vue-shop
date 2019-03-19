<template>
  <div
    role="listbox"
    class="select"
  >
    <div
      role="button"
      class="custom-select"
      @click="handleClick"
    >
      {{ buttonText }}
    </div>
    <div v-if="isOpen">
      <div
        v-for="item in items"
        :key="item.id"
        role="listbox"
        aria-labelledby="selectBox"
        class="select__items"
      >
        <div
          role="option"
          class="select__item"
          @click="handleSelect"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    /**
     * @type <Array<{ id: String | Number, text: String, *}>>
     */
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    buttonText: {
      type: String,
      default: 'Select',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
    handleSelect(item) {
      this.$emit('on-select', item);
    },
  },
};
</script>

<style lang="scss" scope>
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  .select {
    @include element(item) {
      background: var(--white);
      padding: 6px 14px;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
