<template>
  <ul class="space-y-4 hidden md:block">
    <li
      v-for="(genre, index) in genres"
      :key="index"
      class="odd:bg-gray-100 even:bg-gray-200"
    >
      <a href="#" class="text-sm text-gray-800 hover:text-blue-600">
        {{ genre }}
      </a>
    </li>
  </ul>
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
