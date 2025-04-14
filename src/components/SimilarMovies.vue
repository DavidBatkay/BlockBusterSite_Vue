<template>
  <div class="flex gap-4">
    <router-link
      v-for="(movie, index) in similarMovies"
      :key="index"
      :to="`/moviedetails/#`"
      class="w-1/3"
    >
      <!-- NOTE :to="`/moviedetails/${movie.id}`" -->
      <div class="w-full aspect-[3/4] bg-gray-300 rounded-md">
        <img
          :src="movie.image"
          :alt="movie.title"
          class="w-full h-full object-cover rounded-md"
        />
      </div>
    </router-link>
  </div>
</template>

<script setup>
const similarMovies = [
  { id: 1, title: "Similar Movie 1", image: "path-to-image1.jpg" },
  { id: 2, title: "Similar Movie 2", image: "path-to-image2.jpg" },
  { id: 3, title: "Similar Movie 3", image: "path-to-image3.jpg" },
];
</script>
