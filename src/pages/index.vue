<script setup lang="ts">
const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]

const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]
</script>

<template>
  <!-- Category section -->
  <section
    aria-labelledby="category-heading"
    class="
      pt-24

      sm:pt-32

      xl:mx-auto xl:max-w-7xl xl:px-8
    "
  >
    <div
      class="
        px-4

        lg:px-8

        sm:flex sm:items-center sm:justify-between sm:px-6

        xl:px-0
      "
    >
      <h2
        id="category-heading"
        class="text-2xl font-bold tracking-tight text-gray-900"
      >
        Shop by Category
      </h2>
      <a
        href="#"
        class="
          hidden text-sm font-semibold text-indigo-600

          hover:text-indigo-500

          sm:block
        "
      >
        Browse all categories
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>

    <div class="mt-4 flow-root">
      <div class="-my-2">
        <div
          class="
            relative box-content h-80 overflow-x-auto py-2

            xl:overflow-visible
          "
        >
          <div
            class="
              absolute flex space-x-8 px-4

              lg:px-8

              sm:px-6

              xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0
            "
          >
            <a
              v-for="category in categories"
              :key="category.name"
              :href="category.href"
              class="
                relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6

                hover:opacity-75

                xl:w-auto
              "
            >
              <span
                aria-hidden="true"
                class="absolute inset-0"
              >
                <img
                  :src="category.imageSrc"
                  alt=""
                  class="h-full w-full object-cover object-center"
                >
              </span>
              <span
                aria-hidden="true"
                class="
                  absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t
                  from-gray-800 opacity-50
                "
              />
              <span
                class="
                      relative mt-auto text-center text-xl font-bold text-white
                    "
              >{{ category.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        mt-6 px-4

        sm:hidden
      "
    >
      <a
        href="#"
        class="
          block text-sm font-semibold text-indigo-600

          hover:text-indigo-500
        "
      >
        Browse all categories
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </section>

  <!-- Featured section -->
  <section
    aria-labelledby="social-impact-heading"
    class="
      mx-auto max-w-7xl px-4 pt-24

      lg:px-8

      sm:px-6 sm:pt-32
    "
  >
    <div class="relative overflow-hidden rounded-lg">
      <div class="absolute inset-0">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        >
      </div>
      <div
        class="
          relative bg-gray-900 bg-opacity-75 px-6 py-32

          lg:px-16

          sm:px-12 sm:py-40
        "
      >
        <div
          class="
            relative mx-auto flex max-w-3xl flex-col items-center text-center
          "
        >
          <h2
            id="social-impact-heading"
            class="
              text-3xl font-bold tracking-tight text-white

              sm:text-4xl
            "
          >
            <span
              class="
                block

                sm:inline
              "
            >Level up</span>
            <span
              class="
                block

                sm:inline
              "
            >your desk</span>
          </h2>
          <p class="mt-3 text-xl text-white">
            Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.
          </p>
          <a
            href="#"
            class="
              mt-8 block w-full rounded-md border border-transparent bg-white
              px-8 py-3 text-base font-medium text-gray-900

              hover:bg-gray-100

              sm:w-auto
            "
          >Shop Workspace</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Collection section -->
  <section
    aria-labelledby="collection-heading"
    class="
      mx-auto max-w-xl px-4 pt-24

      lg:max-w-7xl lg:px-8

      sm:px-6 sm:pt-32
    "
  >
    <h2
      id="collection-heading"
      class="text-2xl font-bold tracking-tight text-gray-900"
    >
      Shop by Collection
    </h2>
    <p class="mt-4 text-base text-gray-500">
      Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
    </p>

    <div
      class="
        mt-10 space-y-12

        lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0
      "
    >
      <a
        v-for="collection in collections"
        :key="collection.name"
        :href="collection.href"
        class="group block"
      >
        <div
          aria-hidden="true"
          class="
            aspect-h-2 aspect-w-3 overflow-hidden rounded-lg

            group-hover:opacity-75

            lg:aspect-h-6 lg:aspect-w-5
          "
        >
          <img
            :src="collection.imageSrc"
            :alt="collection.imageAlt"
            class="h-full w-full object-cover object-center"
          >
        </div>
        <h3 class="mt-4 text-base font-semibold text-gray-900">{{ collection.name }}</h3>
        <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
      </a>
    </div>
  </section>

  <!-- Featured section -->
  <section
    aria-labelledby="comfort-heading"
    class="
      mx-auto max-w-7xl px-4 py-24

      lg:px-8

      sm:px-6 sm:py-32
    "
  >
    <div class="relative overflow-hidden rounded-lg">
      <div class="absolute inset-0">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        >
      </div>
      <div
        class="
          relative bg-gray-900 bg-opacity-75 px-6 py-32

          lg:px-16

          sm:px-12 sm:py-40
        "
      >
        <div
          class="
            relative mx-auto flex max-w-3xl flex-col items-center text-center
          "
        >
          <h2
            id="comfort-heading"
            class="
              text-3xl font-bold tracking-tight text-white

              sm:text-4xl
            "
          >
            Simple productivity
          </h2>
          <p class="mt-3 text-xl text-white">
            Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.
          </p>
          <a
            href="#"
            class="
              mt-8 block w-full rounded-md border border-transparent bg-white
              px-8 py-3 text-base font-medium text-gray-900

              hover:bg-gray-100

              sm:w-auto
            "
          >Shop Focus</a>
        </div>
      </div>
    </div>
  </section>
</template>
