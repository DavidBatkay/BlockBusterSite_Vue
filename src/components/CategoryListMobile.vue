<template>
  <select
    class="sm:hidden text-xs px-2 py-2 border border-gray-300 rounded-md mr-auto"
  >
    <option
      v-for="(genre, index) in genres"
      :key="index"
      :value="genre.toLowerCase().replace(' ', '-')"
    >
      {{ genre }}
    </option>
  </select>
</template>

<script setup>
const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Science fiction",
  "Thriller",
  "Isekai",
  "Other",
];
</script>
