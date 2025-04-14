<template>
  <section>
    <router-link :to="'/moviedetails/' + store.selectedMovie.id">
      <div
        class="relative flex h-40 items-center justify-center overflow-hidden rounded bg-gray-200 md:h-72 xl:mx-20"
      >
        <img
          v-if="store.selectedMovie?.image"
          :src="store.selectedMovie.image"
          :alt="store.selectedMovie.title"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <h2 class="relative z-10 text-2xl font-semibold text-white">Trending</h2>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import { onMounted } from "vue"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"

const store = useBlockbusterStore()

onMounted(() => {
  store.getRandomMovie()
})
</script>
