<script setup>
defineProps({
  movies: {
    required: true
  }
})
</script>

<template>
  <div
    class="grid min-h-[50vh] w-full auto-rows-fr grid-cols-3 items-start gap-4 md:w-3/4 lg:grid-cols-5"
  >
    <router-link
      v-if="movies.length > 0"
      v-for="(movie, index) in movies"
      :key="index"
      :to="'/moviedetails/' + movie.id"
      class="relative overflow-hidden rounded"
    >
      <div class="relative aspect-[3/4] rounded bg-gray-300">
        <img
          v-if="movie.image"
          :src="movie.image"
          :alt="movie.title"
          class="h-full w-full rounded object-cover"
        />
        <div
          class="absolute right-0 bottom-0 left-0 truncate bg-black/20 px-2 py-1 text-sm text-white"
        >
          {{ movie.title || "No Title" }}
        </div>
      </div>
    </router-link>
    <div v-else class="col-span-3 flex items-center justify-center lg:col-span-5">
      <div class="mx-auto mt-12 max-w-sm p-6 text-center">
        <i class="bi bi-x-circle mb-4 h-12 w-12 text-red-400"></i>
        <p class="text-lg font-semibold text-gray-700">No movies found</p>
        <p class="mt-1 text-sm text-gray-500">Try a different genre or search again!</p>
      </div>
    </div>
  </div>
</template>
