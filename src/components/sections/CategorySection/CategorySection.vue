<script setup lang="ts">
const { data: categories, isLoading } = useGetCategories()

const skeletons = [1, 2, 3, 4, 5]
</script>

<template>
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
            <template v-if="isLoading && !categories">
              <div
                v-for="dummy in skeletons"
                :key="dummy"
                class="
                  relative flex h-80 w-56 flex-col overflow-hidden rounded-lg
                  p-6

                  hover:opacity-75

                  xl:w-auto
                "
              >
                <span
                  aria-hidden="true"
                  class="
                    absolute inset-x-0 bottom-0 flex h-full animate-pulse
                    items-center justify-center bg-gray-200

                    dark:bg-gray-300
                  "
                >
                  <svg
                    class="
                      h-10 w-10 text-gray-200

                      dark:text-gray-400
                    "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </span>
              </div>
            </template>
            <template v-if="!isLoading && categories">
              <a
                v-for="category in categories"
                :key="category.name"
                :href="category.href"
                class="
                  relative flex h-80 w-56 flex-col overflow-hidden rounded-lg
                  p-6

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
                >
                  {{ category.name }}
                </span>
              </a>
            </template>
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
</template>
