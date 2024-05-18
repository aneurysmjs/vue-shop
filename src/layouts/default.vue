<script setup>
import { ref } from 'vue'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

const mobileMenuOpen = ref(false)

function handleClose() {
  mobileMenuOpen.value = false
}

function handleOpen() {
  mobileMenuOpen.value = true
}
</script>

<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <MobileMenu
      :is-open="mobileMenuOpen"
      @close="handleClose"
    />

    <!-- Hero section -->
    <div class="relative bg-gray-900">
      <!-- Decorative image and overlay -->
      <div
        aria-hidden="true"
        class="absolute inset-0 overflow-hidden"
      >
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        >
      </div>
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-gray-900 opacity-50"
      />

      <!-- Navigation -->
      <Navigation

        :currencies
      >
        <template #secondaryNavigation>
          <SecondaryNavigation
            :navigation
            @open-mobile-menu="handleOpen"
          />
        </template>
      </Navigation>

      <!-- <div
        class="
          relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32
          text-center

          lg:px-0

          sm:py-64
        "
      >
        <h1
          class="
            text-4xl font-bold tracking-tight text-white

            lg:text-6xl
          "
        >
          New arrivals are here
        </h1>
        <p class="mt-4 text-xl text-white">
          The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.
        </p>
        <a
          href="#"
          class="
            mt-8 inline-block rounded-md border border-transparent bg-white px-8
            py-3 text-base font-medium text-gray-900

            hover:bg-gray-100
          "
        >Shop New Arrivals</a>
      </div> -->
    </div>

    <main>
      <RouterView />
    </main>

    <footer
      aria-labelledby="footer-heading"
      class="bg-gray-900"
    >
      <h2
        id="footer-heading"
        class="sr-only"
      >
        Footer
      </h2>
      <div
        class="
          mx-auto max-w-7xl px-4

          lg:px-8

          sm:px-6
        "
      >
        <div
          class="
            py-20

            xl:grid xl:grid-cols-3 xl:gap-8
          "
        >
          <div
            class="
              grid grid-cols-2 gap-8

              xl:col-span-2
            "
          >
            <div
              class="
                space-y-12

                md:grid md:grid-cols-2 md:gap-8 md:space-y-0
              "
            >
              <div>
                <h3 class="text-sm font-medium text-white">
                  Shop
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-6"
                >
                  <li
                    v-for="item in footerNavigation.shop"
                    :key="item.name"
                    class="text-sm"
                  >
                    <a
                      :href="item.href"
                      class="
                        text-gray-300

                        hover:text-white
                      "
                    >{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-sm font-medium text-white">
                  Company
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-6"
                >
                  <li
                    v-for="item in footerNavigation.company"
                    :key="item.name"
                    class="text-sm"
                  >
                    <a
                      :href="item.href"
                      class="
                        text-gray-300

                        hover:text-white
                      "
                    >{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="
                space-y-12

                md:grid md:grid-cols-2 md:gap-8 md:space-y-0
              "
            >
              <div>
                <h3 class="text-sm font-medium text-white">
                  Account
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-6"
                >
                  <li
                    v-for="item in footerNavigation.account"
                    :key="item.name"
                    class="text-sm"
                  >
                    <a
                      :href="item.href"
                      class="
                        text-gray-300

                        hover:text-white
                      "
                    >{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-sm font-medium text-white">
                  Connect
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-6"
                >
                  <li
                    v-for="item in footerNavigation.connect"
                    :key="item.name"
                    class="text-sm"
                  >
                    <a
                      :href="item.href"
                      class="
                        text-gray-300

                        hover:text-white
                      "
                    >{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="
              mt-12

              md:mt-16

              xl:mt-0
            "
          >
            <h3 class="text-sm font-medium text-white">
              Sign up for our newsletter
            </h3>
            <p class="mt-6 text-sm text-gray-300">
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form
              class="
                mt-2 flex

                sm:max-w-md
              "
            >
              <label
                for="email-address"
                class="sr-only"
              >Email address</label>
              <input
                id="email-address"
                type="text"
                autocomplete="email"
                required=""
                class="
                  w-full min-w-0 appearance-none rounded-md border border-white
                  bg-white px-4 py-2 text-base text-gray-900
                  placeholder-gray-500 shadow-sm

                  focus:border-white focus:outline-none focus:ring-2
                  focus:ring-white focus:ring-offset-2
                  focus:ring-offset-gray-900
                "
              >
              <div class="ml-4 flex-shrink-0">
                <button
                  type="submit"
                  class="
                    flex w-full items-center justify-center rounded-md border
                    border-transparent bg-indigo-600 px-4 py-2 text-base
                    font-medium text-white shadow-sm

                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:ring-offset-2 focus:ring-offset-gray-900

                    hover:bg-indigo-700
                  "
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="border-t border-gray-800 py-10">
          <p class="text-sm text-gray-400">
            Copyright &copy; 2021 Your Company, Inc.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
