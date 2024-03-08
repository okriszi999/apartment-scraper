<template>
  <div class="space-y-5">
    <h1>Settings</h1>

    <div>
      <h2>Color mode</h2>

      <p class="text-foreground/70">
        You can change the color mode of the app by selecting one of the
        options.
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <div
        v-for="color in colorModes"
        :key="color"
        :class="
          cn(
            'size-60 rounded-2xl relative opacity-50 hover:opacity-100 transition cursor-pointer',
            'border',
            'hover:ring-4 ring-primary/80 border-2 border-background',
            'ring-primary/100 border-2 border-background',
            color == colorMode.preference &&
              'ring-4 ring-primary opacity-100 border-2 border-background',
            color == 'dark' && 'bg-black',
            color == 'light' && 'bg-white',
            color == 'system' && 'bg-gray-200',
          )
        "
      >
        <TooltipProvider :delay-duration="0">
          <Tooltip>
            <TooltipTrigger>
              <div
                :class="
                  cn(
                    'size-60 grid place-items-center text-2xl',
                    color == 'dark' ? 'text-white' : 'text-black',
                  )
                "
                :aria-label="color"
                :aria-selected="color === colorMode.preference"
                @click="colorMode.preference = color"
              >
                <Icon
                  :name="
                    color === 'dark'
                      ? 'lucide:moon'
                      : color === 'light'
                        ? 'lucide:sun'
                        : 'mdi:computer'
                  "
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" :aria-label="color">
              <span>{{ color }}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
import { Tooltip } from "~/components/ui/tooltip";
import TooltipTrigger from "~/components/ui/tooltip/TooltipTrigger.vue";
import TooltipContent from "~/components/ui/tooltip/TooltipContent.vue";
import TooltipProvider from "~/components/ui/tooltip/TooltipProvider.vue";

const colorMode = useColorMode();

const colorModes = ["light", "dark", "system"];
</script>
