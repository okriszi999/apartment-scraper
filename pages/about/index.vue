<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading } = useQuery({
    queryKey: ["no-clue"],
    queryFn: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4, 5]);
            }, 2000);
        });
    },

})
</script>

<template>
    {{ isLoading }}
    <div>
        <h1>About</h1>

        <NuxtLink to="/">Home</NuxtLink>
        <p v-for="num in data">
            {{ num }}
        </p>
    </div>
</template>
