<script setup>
import MovieGrid from "../components/MovieGrid.vue"
import YearFilter from "../components/YearFilter.vue"
</script>
<template>
  <main class="container mx-auto mt-8 flex-grow px-6">
    <section class="container mx-auto my-8 px-6">
      <div class="mb-8 text-center">
        <h1 class="text-xl font-bold text-gray-800 md:text-4xl">Feeling Nostalgic?</h1>
        <p class="mt-2 text-base text-gray-600">Relive the classics from the golden years!</p>
      </div>

      <!-- Question -->
      <div class="mb-6 text-center">
        <p class="text-xs text-gray-700 md:text-xl">How far in the past do you want to go?</p>
      </div>

      <YearFilter />

      <MovieGrid />
    </section>
  </main>
</template>
