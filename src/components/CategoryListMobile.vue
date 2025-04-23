<template>
  <select
    class="mr-auto rounded-md border px-2 py-2 text-xs sm:hidden"
    :class="store.selectedGenre ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-800'"
    :value="store.selectedGenre"
    @change="onSelectGenre"
  >
    <option v-for="(genre, index) in genres" :key="index" :value="genre.toLowerCase()">
      {{ genre }}
    </option>
  </select>
</template>

<script setup>
import { useRouter } from "vue-router"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"
import { onUnmounted } from "vue"
onUnmounted(() => {
  store.selectedGenre = "all"
})

const store = useBlockbusterStore()
const router = useRouter()

const genres = [
  "All",
  "Action",
  "Animated",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Sci-fi",
  "Thriller",
  "Isekai",
  "Other"
]

const onSelectGenre = e => {
  const selected = e.target.value
  store.selectedGenre = selected.toLowerCase()
  router.push({ query: { genre: selected.toLowerCase() } })
}
</script>
