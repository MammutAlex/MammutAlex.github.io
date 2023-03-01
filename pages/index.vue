<template>
  <div class="relative bg-white dark:bg-slate-800">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 lg:w-full lg:max-w-2xl">
        <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white dark:fill-slate-800 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div class="relative px-6 pt-6 lg:pl-8 lg:pr-0">
          <nav class="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
            <div class="hidden lg:ml-12 lg:block lg:space-x-14">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-gray-400 hover:dark:text-slate-300">{{ item.name }}</a>
            </div>
          </nav>
          <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <DialogPanel class="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-slate-800 px-6 py-6 lg:hidden">
              <div class="flex flex-row-reverse items-center justify-between">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-400" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-6 space-y-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-400/10 hover:text-gray-400 hover:dark:text-slate-300">{{ item.name }}</a>
              </div>
            </DialogPanel>
          </Dialog>
        </div>

        <div class="relative py-20 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div class="content">
              <ContentDoc />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <nuxt-img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="/main.jpeg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Youtube', href: 'https://www.youtube.com/@alex-kovalchuk' },
  { name: 'Contact', href: 'mailto:alex@cargofy.com' },
  { name: 'GitHub', href: 'https://github.com/MammutAlex' },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/alex-kovalchuk/' },
]

const mobileMenuOpen = ref(false)
</script>