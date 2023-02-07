<script setup lang="ts">

const links = [
  {
    id: 'Home',
    name: 'Home',
    to: '/',
  },
  {
    id: 'About',
    name: 'About',
    to: '/',
  },
  {
    id: 'Shop',
    name: 'Shop',
    to: '/shop',
  },
];

</script>

<template>
  <nav class="navbar">
    <div class="navbar__navigation">
      <div class="navbar__links">
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          class="navbar-link"
        >
          {{ link.name }}
          <span className="navbar-link__bar" />
        </router-link>
      </div>

      <div class="navbar__cart">
        <font-awesome-icon
          icon="fa-cart-shopping"
          class="navbar__cart-icon"
        />
        <span> (0) </span>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  @apply mx-auto my-4 container;
}

.navbar__navigation {
  @apply flex justify-end;
}

.navbar__links {
  @apply flex mx-1;
}

.navtext {
  @apply font-light p-2 rounded text-gray-800;
  @apply dark:text-white;
}

.navbar-link {
  @apply navtext;
}

.navbar__cart {
  @apply flex font-light p-2 rounded text-gray-800;
  @apply dark:text-white;
}

.navbar__cart-icon {
  @apply navtext;
}

.navbar-link.router-link-active {
  & > span {
    @apply bg-teal-500;
    @apply dark:bg-sky-400;
  }
}

.navbar-link__bar {
  transition: background 0.3s ease-in;
  @apply bg-transparent h-1 block;
}

.navbar__theme {
  @apply p-2;
}
</style>
