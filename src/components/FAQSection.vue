<template>
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">FAQ</h1>
    <div class="space-y-4 border-b pb-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-gray-300 rounded-md border-2 hover:border-yellow-300"
      >
        <button
          class="w-full text-left px-4 py-3 font-semibold text-gray-800 hover:bg-gradient-to-t from-blue-700 to-blue-400 rounded-md flex justify-between items-center"
          @click="toggleFAQ(index)"
        >
          <span>{{ faq.question }}</span>
        </button>
        <div
          v-show="activeFAQ === index"
          class="px-4 py-3 bg-white border-t border-gray-300"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  faqs: Array, // Expecting FAQ data to be passed as a prop
});

const activeFAQ = ref(null);

const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};
</script>
