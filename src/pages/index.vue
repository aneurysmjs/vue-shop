<script setup lang="ts">

</script>

<template>
  <CategorySection />

  <FeaturedSection
    aria-labelledby="social-impact-heading"
    heading="Level up your desk"
    bg-image="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
    class="pt-24"
  >
    <template #text>
      <p class="mt-3 text-xl text-white">
        Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.
      </p>
    </template>

    <template #button>
      <a
        href="#"
        class="
          mt-8 block w-full rounded-md border border-transparent bg-white px-8
          py-3 text-base font-medium text-gray-900

          hover:bg-gray-100

          sm:w-auto
        "
      >

        Shop Workspace
      </a>
    </template>
  </FeaturedSection>

  <CollectionSection />

  <FeaturedSection
    aria-labelledby="comfort-heading"
    heading="Simple productivity"
    bg-image="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
    class="py-24"
  >
    <template #text>
      <p class="mt-3 text-xl text-white">
        Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.
      </p>
    </template>
    <template #button>
      <a
        href="#"
        class="
          mt-8 block w-full rounded-md border border-transparent bg-white px-8
          py-3 text-base font-medium text-gray-900

          hover:bg-gray-100

          sm:w-auto
        "
      >

        Shop Focus
      </a>
    </template>
  </FeaturedSection>
</template>
