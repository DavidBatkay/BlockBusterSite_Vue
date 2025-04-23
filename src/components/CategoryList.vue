<template>
  <ul class="hidden space-y-4 md:block">
    <li v-for="(genre, index) in genres" :key="index" class="odd:bg-gray-100 even:bg-gray-200">
      <router-link
        @click="() => handleClick(genre)"
        :to="`?genre=${genre.toLowerCase()}`"
        class="text-sm hover:text-blue-600"
        :class="isSelectedGenre(genre) ? `text-blue-600` : `text-gray-800`"
      >
        {{ genre }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { onUnmounted } from "vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"
onUnmounted(() => {
  store.selectedGenre = "all"
})
const store = useBlockbusterStore()

const handleClick = genre => {
  store.selectedGenre = genre.toLowerCase()
}

const isSelectedGenre = genre => {
  return genre.toLowerCase() === store.selectedGenre
}

const genres = [
  "All",
  "Action",
  "Adventure",
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
</script>
