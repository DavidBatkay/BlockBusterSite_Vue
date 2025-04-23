<script setup>
import { onMounted, ref, computed, watch } from "vue"
import MovieGridSide from "../components/MovieGridSide.vue"
import SideToggle from "../components/SideToggle.vue"
import CategoryList from "../components/CategoryList.vue"
import CategoryListMobile from "../components/CategoryListMobile.vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore.js"

const store = useBlockbusterStore()
const searchQuery = ref("")

onMounted(() => {
  store.fetchMovies()
})

watch(
  () => store.selectedGenre,
  (newGenre, oldGenre) => {
    if (newGenre !== oldGenre) {
      store.fetchMovies()
    }
  }
)

const filteredMovies = computed(() => {
  if (!searchQuery.value) return store.movies
  const query = searchQuery.value.toLowerCase()
  return store.movies.filter(movie => movie.title.toLowerCase().includes(query))
})
</script>

<template>
  <main class="container mx-auto mt-8 flex-grow px-6">
    <section class="mt-6 grid grid-cols-1 border-b sm:flex">
      <div class="flex justify-center space-x-4 lg:justify-start">
        <SideToggle />
      </div>
      <div class="flex sm:ml-auto">
        <CategoryListMobile />

        <div class="ml-auto">
          <input
            v-model="searchQuery"
            class="rounded-sm border border-gray-300 px-2 py-1"
            placeholder="Search for movies"
            type="search"
          />
          <button
            @click="searchQuery = ''"
            class="rounded bg-gradient-to-t from-blue-700 to-blue-400 text-sm text-yellow-300 hover:bg-blue-700 sm:p-0 xl:px-4 xl:py-1 xl:font-bold"
          >
            Clear
          </button>
        </div>
      </div>
    </section>

    <section class="mx-4 mt-6 flex md:mx-12 lg:mx-48">
      <div class="w-0 md:w-1/4 md:pr-6">
        <CategoryList />
      </div>
      <MovieGridSide class="self-start" :movies="filteredMovies" />
    </section>
  </main>
</template>
