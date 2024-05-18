<script setup lang="ts">
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
</template>
