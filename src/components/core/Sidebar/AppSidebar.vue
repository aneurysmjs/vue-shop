<script setup lang="ts">
interface Link {
  path: string;
  text: string;
}

interface SidebarProps {
  links: Link[];
  title: string;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  title: '',
  links: () => [
    {
      path: '/admin',
      text: 'Admin',
    },
  ],
});

const handleClick = (link: Link) => {
  console.log('link', link);
};
</script>

<template>
  <aside class="sidebar">
    <header>
      <h4 class="text-center">
        {{ title }}
      </h4>
    </header>
    <nav class="sidebar__links">
      <router-link
        v-for="link in props.links"
        :key="link.path"
        :to="link.path"
        tag="button"
        class="btn btn-link"
        @click="handleClick(link)"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </aside>
</template>

<style>
.sidebar {
  border-right: 1px solid #ddd;
  height: 100%;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 15rem;
}

.sidebar__links {
  flex-direction: column;
}
</style>
