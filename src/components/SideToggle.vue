<template>
  <div class="flex justify-center space-x-4 lg:justify-start">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      @click="activeIndex = index"
      :class="index === activeIndex ? activeClass : inactiveClass"
    >
      {{ button }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
const buttons = ["Trending", "New Releases", "Coming Soon"]
let activeIndex = ref(0)
const activeClass = "px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600"
const inactiveClass = "px-4 py-2 text-gray-600 hover:text-blue-600"
</script>
