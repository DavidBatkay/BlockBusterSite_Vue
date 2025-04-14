<script setup>
import { onMounted, ref } from "vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"
const props = defineProps({
  movieId: {
    required: true
  }
})
const handleClick = () => {
  window.location.reload()
}
const store = useBlockbusterStore()
const similarMovies = ref("")
onMounted(async () => {
  await store.getSimilarMovies(props.movieId)
  similarMovies.value = store.similarMovies
})
</script>

<template>
  <div class="flex gap-4">
    <router-link
      v-if="similarMovies.length > 0"
      :onclick="handleClick"
      v-for="(movie, index) in similarMovies"
      :key="index"
      :to="`/moviedetails/${movie.id}`"
      class="w-1/3"
    >
      <!-- NOTE :to="`/moviedetails/${movie.id}`" -->
      <div class="aspect-[3/4] w-full rounded-md bg-gray-300">
        <img :src="movie.image" :alt="movie.title" class="h-full w-full rounded-md object-cover" />
      </div>
    </router-link>
    <p v-else>Sorry! We couldn't find similar titles</p>
  </div>
</template>
