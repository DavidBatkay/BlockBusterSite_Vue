<script>
import movieList from "../data/movieData";
import MovieGrid from "../components/MovieGrid.vue";
import YearFilter from "../components/YearFilter.vue";
export default {
  components: {
    MovieGrid,
    YearFilter,
  },
  data() {
    return {
      movieList,
    };
  },
};
</script>
<template>
  <main class="container mx-auto flex-grow mt-8 px-6">
    <section class="container mx-auto px-6 my-8">
      <!-- Title and Subtitle -->
      <div class="text-center mb-8">
        <h1 class="text-xl md:text-4xl font-bold text-gray-800">
          Feeling Nostalgic?
        </h1>
        <p class="text-base text-gray-600 mt-2">
          Relive the classics from the golden years!
        </p>
      </div>

      <!-- Question -->
      <div class="text-center mb-6">
        <p class="text-xs md:text-xl text-gray-700">
          How far in the past do you want to go?
        </p>
      </div>

      <YearFilter />

      <!-- Movie Thumbnails Grid -->
      <MovieGrid :movies="movieList" />
    </section>
  </main>
</template>
