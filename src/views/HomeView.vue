<script>
import Sidebar from "../components/Sidebar.vue";
import MovieGrid from "../components/MovieGrid.vue";
import movieList from "../data/movieData.js";
import SideToggle from "../components/SideToggle.vue";
export default {
  components: {
    Sidebar,
    MovieGrid,
    SideToggle,
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
    <Sidebar />

    <section class="mt-6">
      <div class="flex space-x-4 border-b justify-center lg:justify-start">
        <SideToggle />
      </div>
    </section>

    <MovieGrid :movies="movieList.slice(0, 5)" />
  </main>
</template>
