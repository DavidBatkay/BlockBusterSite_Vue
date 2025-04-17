<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import SimilarMovies from "../components/SimilarMovies.vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"

const route = useRoute()
const store = useBlockbusterStore()
const movieId = ref(route.params.id)
const handleFetchMovie = async () => {
  await store.fetchMovie(route.params.id)
}
onMounted(() => {
  handleFetchMovie()
})

const handleMovieIdChanged = () => {
  movieId.value = route.params.id
  handleFetchMovie()
}
</script>

<template>
  <main v-if="!store.error" class="container mx-auto mt-6 flex-grow px-6">
    <section class="mb-8 h-auto w-full rounded-md bg-gray-300">
      <div
        class="relative h-32 w-full overflow-hidden rounded-md bg-gray-500 md:h-64"
        :style="
          store.selectedMovie?.thumbnail
            ? {
                backgroundImage: `url(${store.selectedMovie.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            : store.selectedMovie?.image
              ? {
                  backgroundImage: `url(${store.selectedMovie.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              : {}
        "
      >
        <div class="pointer-events-none absolute inset-0 z-0 bg-black opacity-40"></div>

        <div
          class="absolute bottom-0 left-4 z-10 aspect-[3/4] h-20 w-16 rounded bg-gray-300 md:h-40 md:w-32"
        >
          <img
            v-if="store.selectedMovie?.image"
            :src="store.selectedMovie.image"
            :alt="store.selectedMovie.title"
            class="h-full w-full rounded object-cover"
          />
        </div>

        <div
          class="absolute bottom-4 left-24 z-10 flex flex-row text-white sm:space-x-4 md:left-44"
        >
          <div class="flex flex-col items-start">
            <h1 class="text-lg font-semibold md:text-2xl">
              {{ store.selectedMovie?.title || "Loading..." }}
            </h1>
          </div>
          <router-link to="#" class="ml-5 flex flex-col items-start">
            <button
              class="rounded-md border-[3px] border-transparent bg-blue-600 from-blue-700 to-blue-400 p-1 px-4 py-2 text-xs font-bold text-white hover:border-yellow-300 hover:bg-gradient-to-t hover:text-yellow-300"
            >
              Watch Now
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="grid-cols-1 gap-6 lg:flex">
      <div class="w-full lg:w-2/3">
        <h3 class="mb-4 text-2xl font-semibold">Movie Description</h3>
        <p class="text-lg text-gray-800">
          {{ store.selectedMovie?.description || "Loading description..." }}
        </p>
      </div>

      <div
        class="w-full rounded-md border border-gray-300 bg-gray-100 p-4 sm:w-2/3 md:justify-center lg:w-1/3"
      >
        <div class="flex justify-between">
          <h3 class="mb-4 text-xl font-semibold">Similar Titles</h3>
          <small>Genre: {{ store.selectedMovie.genre }}</small>
        </div>
        <SimilarMovies :movieId="movieId" @movieIdChanged="handleMovieIdChanged" />
      </div>
    </section>
  </main>
  <main v-else class="flex h-[80vh] items-center justify-center">
    <div class="max-w-md rounded-lg border border-red-300 bg-red-100 p-6 text-center shadow-lg">
      <h2 class="mb-2 text-2xl font-semibold text-red-700">Oops! Something went wrong</h2>
      <p class="mb-4 text-red-600">
        {{ store.error }}
      </p>
      <p class="text-sm text-red-500">
        If this movie is restricted due to parental settings, you can update them in your account
        settings to access more content.
      </p>
    </div>
  </main>
</template>
