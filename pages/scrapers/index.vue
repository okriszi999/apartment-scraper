<template>
  <div class="space-y-8">
    <div class="flex justify-between">
      <span>
        <h1>Scrapers</h1>
        <p class="text-foreground/80">
          Scrapers are used to extract data from websites.
        </p>
      </span>
      <Button variant="outline"> Create Scraper </Button>
    </div>

    <div class="space-y-3">
      <div>
        <h2>Available scrapers</h2>
        <p class="text-foreground/80">
          Here are the scrapers that are available to use.
        </p>
      </div>

      <div>
        <div v-if="!isLoading" class="flex flex-1 gap-2">
          <div
            v-for="scraper in data?.scrapers"
            :key="scraper.url"
            class="bg-primary/10 rounded"
          >
            <TooltipProvider :delay-duration="300">
              <Tooltip>
                <TooltipTrigger>
                  <div>
                    <div
                      :class="
                        cn(
                          'grid rounded place-items-center p-4 cursor-pointer text-primary font-bold',
                          'hover:bg-primary/10 hover:text-primary/90',
                          'active:bg-primary/20 hover:text-primary',
                          'transition duration-300',
                        )
                      "
                    >
                      <span>{{ scraper.name }}</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  class="bg-background ring-1 ring-primary/20 space-y-2"
                >
                  <NuxtLink
                    :to="scraper.url"
                    target="__blank"
                    class="text-primary text-sm p-1"
                  >
                    {{ scraper.url }}
                  </NuxtLink>
                  <div class="grid grid-cols-3 gap-2">
                    <Badge
                      v-for="tag in scraper.tags"
                      :key="tag"
                      class="bg-primary/5 text-primary/80 hover:bg-primary/20 hover:text-primary/60 cursor-pointer"
                      >{{ tag }}</Badge
                    >
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div v-else class="flex flex-1 gap-2">
          <div
            v-for="i in 5"
            :key="i"
            class="bg-primary/10 rounded animate-pulse"
          >
            <div class="grid place-items-center p-4">
              <span class="w-20 h-6 bg-primary/20 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import Badge from "~/components/ui/badge/Badge.vue";
import { cn } from "~/lib/utils";
import type { ScraperResponse } from "~/server/api/scrapers/index.get";

const { data, isLoading } = useQuery<ScraperResponse>({
  queryKey: ["scrapers"],
  queryFn: async () => {
    return await fetch("/api/scrapers").then((res) => res.json());
  },
});
</script>
~/server/api/scrapers.get~/server/api/scrapers/index.get
