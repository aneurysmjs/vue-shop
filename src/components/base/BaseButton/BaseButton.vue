<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import classNames from 'classnames';

interface BaseButtonProps {
  type: ButtonHTMLAttributes['type'];
  primary?: boolean;
}

/**
 * @see https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
 */
const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
});

const emit = defineEmits<{
  (evt: 'click'): void;
}>();

const skins = classNames({
  'button--primary': props.primary,
});

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <button :type="type" :class="skins" class="button" @click="handleClick">
    <slot />
  </button>
</template>

<style>

.button {
  @apply
  bg-blue-700
  dark:bg-blue-600
  dark:focus:ring-blue-800"
  dark:hover:bg-blue-700
  focus:outline-none
  focus:ring-4
  focus:ring-blue-300
  font-medium
  hover:bg-blue-800
  mb-2
  mr-2
  px-5
  py-2.5
  rounded-lg
  text-sm
  text-white
}
</style>
