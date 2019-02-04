<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    :class="{ active: isActive }"
  >
    <router-link
      class="navbar-brand"
      to="/"
    >
      <img
        width="30"
        height="30"
        class="d-inline-block align-top"
        src="assets/logo.png"
        alt="logo"
      >
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      @click="handleToggleMenu"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      class="collapse navbar-collapse"
      :class="{ show: isMenuToggled }"
    >
      <ul class="navbar-nav ml-auto">
        <li
          v-for="link in links"
          :key="link.id"
          class="nav-item active"
        >
          <router-link
            class="nav-link active"
            :to="link.to"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      isActive: false,
      isMenuToggled: false,
      links: [
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
      ],
    };
  },
  mounted() {
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.applyScroll('aha');
      } else {
        this.applyScroll('no');
      }
    };
    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function onscroll() {
      scrollFunction();
    };
  },
  methods: {
    applyScroll() {
    },
    handleToggleMenu() {
      this.isMenuToggled = !this.isMenuToggled;
    },
  },
};

</script>
