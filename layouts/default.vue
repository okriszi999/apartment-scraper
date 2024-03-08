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
const route = useRoute();
const isOpenOpacity = ref(0);

const toggleNav = () => (isOpen.value = !isOpen.value);

const navItemClass = (path: string) =>
  cn(
    "flex items-center transition rounded-lg",
    "hover:bg-primary/5 hover:text-primary/100",
    "active:bg-primary/15 active:text-primary/100",
    isOpen.value ? "py-2 px-3 justify-between" : "justify-center size-12",
    route.path === path ? "bg-primary/10 text-primary/90" : "",
  );
</script>

<template>
  <div class="flex">
    <nav
      :class="
        cn(
          'bg-card h-screen px-2 py-6 relative transition shadow-md',
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
            'size-6 cursor-pointer absolute top-8 -right-3 bg-card p-1 rounded-full transition border',
            'hover:bg-primary/5  hover:border-primary hover:text-primary',
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
          class="flex flex-col mb-2 justify-between"
        >
          <NuxtLink :to="item.path" :class="navItemClass(item.path)">
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
        <NuxtLink :to="item.path" :class="navItemClass(item.path)">
          <li :class="cn(!isOpen && 'sr-only')">
            {{ item.name }}
          </li>

          <Icon :name="item.icon" :class="cn('', !isOpen && 'size-5 m-2')" />
        </NuxtLink>
      </ul>
    </nav>
    <main class="pt-20 px-4 w-full">
      <slot />
    </main>
  </div>
</template>
