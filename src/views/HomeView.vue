<script setup>
import { ref, computed, onMounted } from "vue"
import Sidebar from "../components/Sidebar.vue"
import MovieGrid from "../components/MovieGrid.vue"
import SideToggle from "../components/SideToggle.vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore.js"
const store = useBlockbusterStore()
const screenWidth = ref(window.innerWidth)

onMounted(() => {
  store.fetchMovies()

  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth
  })
})

const moviesToShow = computed(() => {
  if (screenWidth.value >= 1280) {
    // Desktop (xl)
    return store.movies.slice(0, 5)
  } else if (screenWidth.value >= 768) {
    // Tablet (md) and Phone (sm)
    return store.movies.slice(0, 6)
  }
})
</script>

<template>
  <main class="container mx-auto mt-8 flex-grow px-6">
    <Sidebar />

    <section class="mt-6">
      <div class="flex justify-center space-x-4 border-b lg:justify-start">
        <SideToggle />
      </div>
    </section>

    <MovieGrid :movies="moviesToShow" />
  </main>
</template>
