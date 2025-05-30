<script setup>
import { ref } from "vue"
import { useNewsStore } from "../stores/useNewsStore"

const title = ref("")
const content = ref("")
const showForm = ref(false)
const newsStore = useNewsStore()

const handleSubmit = async () => {
  if (!title.value.trim() || !content.value.trim()) return

  await newsStore.addNews({
    title: title.value,
    content: content.value
  })

  // Reset fields and hide form
  title.value = ""
  content.value = ""
  showForm.value = false
}
</script>

<template>
  <div class="mx-auto w-full max-w-md rounded border p-4">
    <template v-if="!showForm">
      <button
        @click="showForm = true"
        class="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        + Post News
      </button>
    </template>

    <form v-else @submit.prevent="handleSubmit" class="animate-fade-in space-y-3">
      <h2 class="text-lg font-semibold">Post News</h2>

      <input
        v-model="title"
        type="text"
        placeholder="Title"
        class="w-full rounded border px-3 py-2"
        required
      />
      <textarea
        v-model="content"
        placeholder="Content"
        class="w-full rounded border px-3 py-2"
        rows="4"
        required
      ></textarea>

      <div class="flex items-center justify-between">
        <button type="submit" class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Post
        </button>
        <button type="button" @click="showForm = false" class="text-gray-500 hover:text-gray-700">
          Cancel
        </button>
      </div>

      <p v-if="newsStore.error" class="text-red-600">{{ newsStore.error }}</p>
    </form>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>
