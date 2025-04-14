<script setup>
defineProps({
  movies: {
    required: true
  }
})
</script>

<template>
  <div class="grid w-full auto-rows-fr grid-cols-3 items-start gap-4 md:w-3/4 lg:grid-cols-5">
    <router-link
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
  </div>
</template>
