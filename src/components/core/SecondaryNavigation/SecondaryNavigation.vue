<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,

  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from '@heroicons/vue/24/outline'

interface SecondaryNavigationProps {

  navigation: Record<string, any>
}

const props = defineProps<SecondaryNavigationProps>()

const emit = defineEmits<{
  openMobileMenu: []
}>()
</script>

<template>
  <div class="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
    <div
      class="
        mx-auto max-w-7xl px-4

        lg:px-8

        sm:px-6
      "
    >
      <div>
        <div class="flex h-16 items-center justify-between">
          <!-- Logo (lg+) -->
          <div
            class="
              hidden

              lg:flex lg:flex-1 lg:items-center
            "
          >
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              >
            </a>
          </div>

          <div
            class="
              hidden h-full

              lg:flex
            "
          >
            <!-- Flyout menus -->
            <PopoverGroup class="inset-x-0 bottom-0 px-4">
              <div class="flex h-full justify-center space-x-8">
                <Popover
                  v-for="category in props.navigation.categories"
                  :key="category.name"
                  v-slot="{ open }"
                  class="flex"
                >
                  <div class="relative flex">
                    <PopoverButton
                      class="
                        relative z-10 flex items-center justify-center text-sm
                        font-medium text-white transition-colors duration-200
                        ease-out
                      "
                    >
                      {{ category.name }}
                      <span
                        class="
                          absolute inset-x-0 -bottom-px h-0.5 transition
                          duration-200 ease-out
                        "
                        :class="[open ? 'bg-white' : '']"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel
                      class="
                            absolute inset-x-0 top-full text-sm text-gray-500
                          "
                    >
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div
                        class="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div class="relative bg-white">
                        <div
                          class="
                            mx-auto max-w-7xl px-4

                            lg:px-8

                            sm:px-6
                          "
                        >
                          <div
                            class="
                                      grid grid-cols-4 gap-x-8 gap-y-10 py-16
                                    "
                          >
                            <div
                              v-for="item in category.featured"
                              :key="item.name"
                              class="group relative"
                            >
                              <div
                                class="
                                  aspect-h-1 aspect-w-1 overflow-hidden
                                  rounded-md bg-gray-100

                                  group-hover:opacity-75
                                "
                              >
                                <img
                                  :src="item.imageSrc"
                                  :alt="item.imageAlt"
                                  class="object-cover object-center"
                                >
                              </div>
                              <a
                                :href="item.href"
                                class="
                                          mt-4 block font-medium text-gray-900
                                        "
                              >
                                <span
                                  class="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {{ item.name }}
                              </a>
                              <p
                                aria-hidden="true"
                                class="mt-1"
                              >
                                Shop now
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :href="page.href"
                  class="
                        flex items-center text-sm font-medium text-white
                      "
                >
                  {{ page.name }}
                </a>
              </div>
            </PopoverGroup>
          </div>

          <!-- Mobile menu and search (lg-) -->
          <div
            class="
              flex flex-1 items-center

              lg:hidden
            "
          >
            <button
              type="button"
              class="-ml-2 p-2 text-white"
              @click="emit('openMobileMenu')"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>

            <!-- Search -->
            <a
              href="#"
              class="ml-2 p-2 text-white"
            >
              <span class="sr-only">Search</span>
              <MagnifyingGlassIcon
                class="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          </div>

          <!-- Logo (lg-) -->
          <a
            href="#"
            class="lg:hidden"
          >
            <span class="sr-only">Your Company</span>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt=""
              class="h-8 w-auto"
            >
          </a>

          <div class="flex flex-1 items-center justify-end">
            <a
              href="#"
              class="
                hidden text-sm font-medium text-white

                lg:block
              "
            >
              Search
            </a>

            <div
              class="
                flex items-center

                lg:ml-8
              "
            >
              <!-- Help -->
              <a
                href="#"
                class="
                  p-2 text-white

                  lg:hidden
                "
              >
                <span class="sr-only">Help</span>
                <QuestionMarkCircleIcon
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                class="
                  hidden text-sm font-medium text-white

                  lg:block
                "
              >
                Help
              </a>

              <!-- Cart -->
              <div
                class="
                  ml-4 flow-root

                  lg:ml-8
                "
              >
                <a
                  href="#"
                  class="group -m-2 flex items-center p-2"
                >
                  <ShoppingBagIcon
                    class="h-6 w-6 flex-shrink-0 text-white"
                    aria-hidden="true"
                  />
                  <span class="ml-2 text-sm font-medium text-white">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
