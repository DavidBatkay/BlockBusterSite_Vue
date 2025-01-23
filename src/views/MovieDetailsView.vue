<script>
import SimilarMovies from "../components/SimilarMovies.vue";
export default {
  components: {
    SimilarMovies,
  },
};
</script>

<template>
  <main class="container mx-auto flex-grow mt-6 px-6">
    <section class="bg-gray-300 w-full h-auto rounded-md mb-8 s">
      <div class="relative w-full h-32 md:h-64 bg-gray-500 rounded-md">
        <!-- Movie Thumbnail (Overlayed) -->
        <div
          class="absolute bottom-0 left-4 h-20 w-16 md:w-32 md:h-40 bg-gray-300 rounded aspect-[3/4]"
        >
          <img
            class="w-full h-full object-cover rounded"
            alt="Movie Thumbnail"
          />
        </div>

        <!-- Title and Watch Now Button -->
        <div
          class="absolute bottom-4 left-24 md:left-44 text-white flex flex-row sm:space-x-4"
        >
          <!-- Movie Title and Year -->
          <div class="flex flex-col items-start">
            <h1 class="md:text-2xl text-lg font-semibold">Movie Title</h1>
            <h2 class="md:text-xl text-sm">2024</h2>
          </div>

          <!-- Watch Now Button -->
          <router-link to="#" class="flex flex-col items-start ml-5">
            <button
              class="px-4 py-2 bg-blue-600 text-white text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400"
            >
              Watch Now
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="grid-cols-1 lg:flex gap-6">
      <div class="w-full lg:w-2/3">
        <h3 class="text-2xl font-semibold mb-4">Movie Description</h3>
        <p class="text-lg text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
          efficitur enim. Aenean lacinia risus scelerisque eros convallis
          euismod. Suspendisse vitae scelerisque ipsum. Aliquam pulvinar, nunc a
          auctor sagittis, lorem sem semper orci, sodales pulvinar libero massa
          vel enim. Proin rutrum lectus eget rhoncus tempus. Fusce sed urna vel
          felis tempor porttitor. Donec ac dignissim lectus. Donec feugiat
          fermentum erat sit amet efficitur.
        </p>
      </div>

      <div
        class="w-full sm:w-2/3 md:justify-center lg:w-1/3 bg-gray-100 border border-gray-300 p-4 rounded-md"
      >
        <h3 class="text-xl font-semibold mb-4">Similar Titles</h3>
        <SimilarMovies />
      </div>
    </section>
  </main>
</template>
