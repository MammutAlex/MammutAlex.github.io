<template>
  <div class="relative bg-white dark:bg-slate-800">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 lg:w-full lg:max-w-2xl">
        <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white dark:fill-slate-800 lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div class="relative py-20 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div class="content">
              <ContentDoc />
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:w-2/3">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <nuxt-img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full" src="/main.jpg" alt="Alex Kovalchuk" />
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
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/alex-kovalchuk' },
]

const mobileMenuOpen = ref(false)

useSchemaOrg([
  definePerson({
    name: 'Alex Kovalchuk',
    givenName: 'Alex',
    familyName: 'Kovalchuk',
    email: 'alex@cargofy.com',
    sameAs: [
      {
        "roleName": "My website",
        "sameAs": "https://alex-kovalchuk.pro"
      },
      {
        "roleName": "My Youtube chanel",
        "sameAs": "https://www.youtube.com/@alex-kovalchuk"
      },
      {
        "roleName": "My Github",
        "sameAs": "https://github.com/MammutAlex"
      },
      {
        "roleName": "My Linkedin",
        "sameAs": "https://www.linkedin.com/in/alex-kovalchuk"
      },
    ]
  })
])
</script>