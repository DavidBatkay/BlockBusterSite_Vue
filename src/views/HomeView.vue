<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import Sidebar from "../components/Sidebar.vue";
import MovieGrid from "../components/MovieGrid.vue";
import SideToggle from "../components/SideToggle.vue";
import movieList from "../data/movieData.js";

const screenWidth = ref(window.innerWidth);

// Watch the window resize event to update the screen width
onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

const moviesToShow = computed(() => {
  if (screenWidth.value >= 1280) {
    // Desktop (xl)
    return movieList.slice(0, 5);
  } else if (screenWidth.value >= 768) {
    // Tablet (md) and Phone (sm)
    return movieList.slice(0, 6);
  }
});
</script>

<template>
  <main class="container mx-auto flex-grow mt-8 px-6">
    <Sidebar />

    <section class="mt-6">
      <div class="flex space-x-4 border-b justify-center lg:justify-start">
        <SideToggle />
      </div>
    </section>

    <MovieGrid :movies="moviesToShow" />
  </main>
</template>
