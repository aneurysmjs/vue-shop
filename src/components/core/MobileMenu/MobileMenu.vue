<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

interface MobileMenuProps {
  isOpen: boolean
}

const props = defineProps<MobileMenuProps>()

const emit = defineEmits<{
  close: []
}>()

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
</script>

<template>
  <TransitionRoot
    as="template"
    :show="props.isOpen"
  >
    <Dialog
      class="
        relative z-40

        lg:hidden
      "
      @close="emit('close')"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="
              relative flex w-full max-w-xs flex-col overflow-y-auto bg-white
              pb-12 shadow-xl
            "
          >
            <div class="flex px-4 pb-2 pt-5">
              <button
                type="button"
                class="
                  -m-2 inline-flex items-center justify-center rounded-md p-2
                  text-gray-400
                "
                @click="emit('close')"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <!-- Links -->
            <TabGroup
              as="div"
              class="mt-2"
            >
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex space-x-8 px-4">
                  <Tab
                    v-for="category in navigation.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                    as="template"
                  >
                    <button
                      class="
                        flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base
                        font-medium
                      "
                      :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900']"
                    >
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="space-y-12 px-4 py-6"
                >
                  <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div
                      v-for="item in category.featured"
                      :key="item.name"
                      class="group relative"
                    >
                      <div
                        class="
                          aspect-h-1 aspect-w-1 overflow-hidden rounded-md
                          bg-gray-100

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
                        class="mt-6 block text-sm font-medium text-gray-900"
                      >
                        <span
                          class="absolute inset-0 z-10"
                          aria-hidden="true"
                        />
                        {{ item.name }}
                      </a>
                      <p
                        aria-hidden="true"
                        class="mt-1 text-sm text-gray-500"
                      >
                        Shop now
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div
                v-for="page in navigation.pages"
                :key="page.name"
                class="flow-root"
              >
                <a
                  :href="page.href"
                  class="-m-2 block p-2 font-medium text-gray-900"
                >
                  {{ page.name }}
                </a>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div class="flow-root">
                <a
                  href="#"
                  class="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div class="flow-root">
                <a
                  href="#"
                  class="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label
                    for="mobile-currency"
                    class="sr-only"
                  >
                    Currency
                  </label>
                  <div
                    class="
                      group relative -ml-2 rounded-md border-transparent

                      focus-within:ring-2 focus-within:ring-white
                    "
                  >
                    <select
                      id="mobile-currency"
                      name="currency"
                      class="
                        flex items-center rounded-md border-transparent bg-none
                        py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700

                        focus:border-transparent focus:outline-none focus:ring-0

                        group-hover:text-gray-800
                      "
                    >
                      <option
                        v-for="currency in currencies"
                        :key="currency"
                      >
                        {{ currency }}
                      </option>
                    </select>
                    <div
                      class="
                        pointer-events-none absolute inset-y-0 right-0 flex
                        items-center
                      "
                    >
                      <ChevronDownIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
