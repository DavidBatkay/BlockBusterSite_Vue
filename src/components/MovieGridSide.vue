<template>
  <div
    class="w-full md:w-3/4 grid grid-cols-3 lg:grid-cols-5 gap-4 items-start auto-rows-fr"
  >
    <router-link v-for="(movie, index) in movies" :key="index" :to="movie.url">
      <div class="bg-gray-300 rounded aspect-[3/4]">
        <img
          v-if="movie.image"
          :src="movie.image"
          :alt="movie.title"
          class="w-full h-full object-cover rounded"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieGridSide",
  props: {
    movies: {
      required: true,
    },
  },
};
</script>
