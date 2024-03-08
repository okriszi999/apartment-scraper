<script lang="ts" setup>
const navItems = ref([
  { name: "Dashboard", path: "/dashboard", icon: "lucide:home" },
  { name: "Scrapers", path: "/scrapers", icon: "lucide:air-vent" },
  {
    name: "Settings",
    path: "/settings",
    icon: "lucide:settings",
    isBottom: true,
  },
]);

import { ref } from "vue";
import { cn } from "~/lib/utils";

const isOpen = ref(true);
const isOpenOpacity = ref(0);

const toggleNav = () => {
  console.log("hello");
  isOpen.value = !isOpen.value;
};

const navItemClass = () => {
  return cn(
    "flex items-center  bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition rounded-lg",
    isOpen.value ? "py-2 px-3 justify-between" : "justify-center size-12",
  );
};
</script>

<template>
  <div class="flex">
    <nav
      :class="
        cn(
          'bg-gray-100 h-screen px-2 py-6 relative transition shadow-md shadow-gray-300',
          isOpen ? 'w-56' : 'w-16',
          'flex flex-col justify-between',
        )
      "
      @mouseenter="isOpenOpacity = 1"
      @mouseleave="isOpenOpacity = 0"
    >
      <Icon
        name="lucide:chevron-right"
        :class="
          cn(
            'size-6 cursor-pointer absolute top-8 -right-3 bg-white p-1 rounded-full transition border',
            'hover:bg-white/50  hover:border-gray-300',
            isOpen ? 'rotate-180' : '',
          )
        "
        :style="{ opacity: isOpenOpacity, transition: 'opacity 250ms' }"
        @click="toggleNav"
      />
      <div>
        <div :class="cn('flex justify-between')">
          <div v-if="isOpen" class="mb-4 px-3">
            <h1 class="text-2xl font-bold">Scraper</h1>
          </div>
        </div>

        <ul
          v-for="item in navItems.filter((item) => !item.isBottom)"
          :key="item.path"
          class="flex flex-col justify-between"
        >
          <NuxtLink :to="item.path" :class="navItemClass()">
            <li :class="cn(!isOpen && 'sr-only')">
              {{ item.name }}
            </li>

            <Icon :name="item.icon" :class="cn('', !isOpen && 'size-5 m-2')" />
          </NuxtLink>
        </ul>
      </div>

      <ul
        v-for="item in navItems.filter((item) => item.isBottom)"
        :key="item.path"
        class="flex flex-col justify-between"
      >
        <NuxtLink :to="item.path" :class="navItemClass()">
          <li :class="cn(!isOpen && 'sr-only')">
            {{ item.name }}
          </li>

          <Icon :name="item.icon" :class="cn('', !isOpen && 'size-5 m-2')" />
        </NuxtLink>
      </ul>
    </nav>
    <main class="pt-20 px-4">
      <slot />
    </main>
  </div>
</template>
