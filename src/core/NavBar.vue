<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
     v-bind:class="{ active: isActive }"
    >
    <a class="navbar-brand" href="#">
      <img
        width="30"
        height="30"
        class="d-inline-block align-top"
        src="assets/logo.png"
        alt="logo"
      >
    </a>
    <button
      class="navbar-toggler"
      type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li
          v-for="link in links"
          :key="link.id"
          class="nav-item active"
        >
          <a class="nav-link" href="#">{{link.name}}</a>
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
        links: [
          {
            id: 'Home',
            name: 'Home',
          },
          {
            id: 'About',
            name: 'About',
          },
          {
            id: 'Shop',
            name: 'Shop',
          }
        ]
      }
    },
    mounted() {
      // When the user scrolls down 50px from the top of the document, resize the header's font size
      window.onscroll = function () {
        scrollFunction()
      };

      const scrollFunction = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          this.applyScroll('aha');
        } else {
          this.applyScroll('no');
        }
        
      }

    },
    methods: {
      applyScroll(pa) {
        console.log('scroll', pa);
      }
    }
  }

</script>

