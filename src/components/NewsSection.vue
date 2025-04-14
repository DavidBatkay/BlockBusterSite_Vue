<template>
  <div>
    <section class="mb-6 rounded-lg bg-white p-6 shadow-md">
      <h2 class="text-center text-lg font-semibold">Blockbuster News and Updates</h2>
    </section>

    <section class="rounded-lg bg-white p-6 shadow-md">
      <div v-if="newsStore.news.length === 0" class="flex h-32 items-center justify-center">
        <p class="text-gray-500">There are no news or updates yet.</p>
      </div>

      <ul v-else class="space-y-4">
        <li
          v-for="(item, index) in newsStore.news"
          :key="index"
          class="border-b pb-2 last:border-b-0"
        >
          <h3 class="font-medium">{{ item.title }}</h3>
          <p class="text-sm text-gray-600">{{ item.content }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useNewsStore } from "../stores/useNewsStore"

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.fetchNews()
})
</script>
