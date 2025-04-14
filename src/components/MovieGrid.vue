<script setup>
import { onMounted } from "vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"
import { ref } from "vue"
useBlockbusterStore
const movieStore = useBlockbusterStore()
const movies = ref("")
const props = defineProps({
  movies: {
    required: false
  }
})
onMounted(async () => {
  await movieStore.fetchMovies()
  movies.value = props.movies ? props.movies : movieStore.movies
})
</script>

<template>
  <section class="mx-4 mt-6 grid grid-cols-3 gap-4 md:mx-12 lg:mx-48 lg:grid-cols-5">
    <router-link
      v-for="(movie, index) in movies"
      :key="index"
      :to="'/moviedetails/' + movie.id"
      class="relative overflow-hidden rounded"
    >
      <div class="aspect-[3/4] rounded bg-gray-300">
        <img :src="movie.image" :alt="movie.title" class="h-full w-full rounded object-cover" />
      </div>
    </router-link>
  </section>
</template>
