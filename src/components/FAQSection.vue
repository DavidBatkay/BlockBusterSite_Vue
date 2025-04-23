<template>
  <div class="mb-12">
    <h1 class="mb-8 text-center text-4xl font-bold text-gray-800">FAQ</h1>
    <div class="space-y-4 border-b pb-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="rounded-md border-2 border-gray-300 hover:border-yellow-300"
      >
        <button
          class="flex w-full items-center justify-between rounded-md from-blue-700 to-blue-400 px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gradient-to-t"
          @click="toggleFAQ(index)"
        >
          <span>{{ faq.question }}</span>
        </button>
        <div v-show="activeFAQ === index" class="border-t border-gray-300 bg-white px-4 py-3">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  faqs: Array // Expecting FAQ data to be passed as a prop
})

const activeFAQ = ref(null)

const toggleFAQ = index => {
  activeFAQ.value = activeFAQ.value === index ? null : index
}
</script>
