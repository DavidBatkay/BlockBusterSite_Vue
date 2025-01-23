<template>
  <div>
    <!-- Header Section -->
    <section class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-lg font-semibold text-center">
        Blockbuster News and Updates
      </h2>
    </section>

    <!-- News and Updates Content -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <div
        v-if="news.length === 0"
        class="flex items-center justify-center h-32"
      >
        <p class="text-gray-500">There are no news or updates yet.</p>
      </div>

      <ul v-else class="space-y-4">
        <li
          v-for="(item, index) in news"
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
import { ref } from "vue";
import newsData from "../data/newsData.js";

// NOTE: For testing
// const news = [];

const news = ref(newsData);
</script>
