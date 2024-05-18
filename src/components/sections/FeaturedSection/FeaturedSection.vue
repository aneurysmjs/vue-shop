<script setup lang="ts">
interface FeaturedSectionProps {
  bgImage: string
  heading: string
}

const props = defineProps<FeaturedSectionProps>()

defineSlots<{
  text: () => any
  button: () => any
}>()
</script>

<template>
  <section

    class="
      mx-auto max-w-7xl px-4

      lg:px-8

      sm:px-6 sm:pt-32
    "
  >
    <div class="relative overflow-hidden rounded-lg">
      <div class="absolute inset-0">
        <img
          :src="props.bgImage"
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
            :id="props.heading"

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
            >
              {{ props.heading }}
            </span>
          </h2>

          <slot name="text" />

          <slot name="button" />
        </div>
      </div>
    </div>
  </section>
</template>
