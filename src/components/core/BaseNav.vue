<template>
  <nav :class="{ active: isActive }" class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img
        width="30"
        height="30"
        class="d-inline-block align-top"
        src="assets/logo.png"
        alt="logo"
      />
    </router-link>
    <button class="navbar-toggler" type="button" @click="handleToggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{ show: isMenuToggled }" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li v-for="link in links" :key="link.id" class="nav-item active">
          <router-link :to="link.to" class="nav-link active">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navigation__cart">
      <Icon name="cart" height="1.2rem" width="1.2rem" />
      <span> ( {{ count }} ) </span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createNamespacedHelpers } from 'vuex-composition-helpers';

import Icon from '@/components/base/Icon';

const { useState } = createNamespacedHelpers('cart'); // specific module name

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

const isActive = ref(false);
const isMenuToggled = ref(false);
const { count } = useState(['count']);

const handleToggleMenu = () => {
  isMenuToggled.value = !isMenuToggled.value;
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-around;
}

.navigation__ {
  margin-left: 0.5rem;
  position: relative;
}
</style>
