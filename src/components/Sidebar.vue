<template>
  <section id="sidebar">
    <router-link :to="'/moviedetails/' + store.selectedMovie.id">
      <div
        class="relative flex h-40 items-center justify-center overflow-hidden rounded bg-gray-200 opacity-100 md:h-72 xl:mx-20"
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
        <!-- Overlay for darkening the image -->
        <div class="absolute inset-0 bg-black opacity-40"></div>

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
