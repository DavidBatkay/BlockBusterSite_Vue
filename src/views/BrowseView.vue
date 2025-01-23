<script>
import Sidebar from "../components/Sidebar.vue";
import MovieGridSide from "../components/MovieGridSide.vue";
import movieList from "../data/movieData.js";
import SideToggle from "../components/SideToggle.vue";
import CategoryList from "../components/CategoryList.vue";
import CategoryListMobile from "../components/CategoryListMobile.vue";

export default {
  components: {
    Sidebar,
    MovieGridSide,
    SideToggle,
    CategoryList,
    CategoryListMobile,
  },
  data() {
    return {
      movieList,
      searchQuery: "",
    };
  },
  computed: {
    filteredMovies() {
      if (!this.searchQuery) return this.movieList; // Show all if no search query

      const query = this.searchQuery.toLowerCase();
      return this.movieList.filter((movie) =>
        movie.title.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<template>
  <main class="container mx-auto flex-grow mt-8 px-6">
    <section class="grid grid-cols-1 sm:flex mt-6 border-b">
      <div class="flex space-x-4 justify-center lg:justify-start">
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
            class="xl:px-4 xl:py-1 sm:p-0 bg-gradient-to-t xl:font-bold from-blue-700 to-blue-400 text-yellow-300 text-sm rounded hover:bg-blue-700"
          >
            Clear
          </button>
        </div>
      </div>
    </section>

    <section class="mt-6 mx-4 md:mx-12 lg:mx-48 flex">
      <div class="w-0 md:w-1/4 md:pr-6">
        <CategoryList />
      </div>
      <MovieGridSide class="self-start" :movies="filteredMovies" />
    </section>
  </main>
</template>
