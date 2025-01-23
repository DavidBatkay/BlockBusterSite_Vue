<template>
  <section
    class="mt-6 mx-4 md:mx-12 lg:mx-48 grid grid-cols-3 lg:grid-cols-5 gap-4"
  >
    <router-link v-for="(movie, index) in movies" :key="index" :to="movie.url">
      <div class="bg-gray-300 rounded aspect-[3/4]">
        <!-- NOTE add an image or other content inside div -->
        <img
          :src="movie.image"
          :alt="movie.title"
          class="w-full h-full object-cover rounded"
        />
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "MovieGrid",
  props: {
    movies: {
      required: true,
    },
  },
};
</script>
