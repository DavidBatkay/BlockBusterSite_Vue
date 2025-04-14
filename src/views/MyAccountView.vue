<script setup>
import { ref, watch, onMounted } from "vue"
import NewsSection from "../components/NewsSection.vue"
import userData from "../data/userData.js"

const user = ref({
  email: userData.email,
  image: userData.image,
  subscriptionPlan: localStorage.getItem("subscriptionPlan") || "Free Plan"
})

const options = ref(["Billing Information", "Parental Controls", "Account Settings"])
const modalMessage = ref("Select an option to view details.")

function showDetails(option) {
  modalMessage.value = `Details about ${option} will go here.`
}

watch(
  () => user.value,
  () => {
    user.value.subscriptionPlan = localStorage.getItem("subscriptionPlan") || "Free Plan"
  },
  { deep: true }
)

onMounted(() => {
  window.addEventListener("storage", () => {
    user.value.subscriptionPlan = localStorage.getItem("subscriptionPlan") || "Free Plan"
  })
})
</script>

<template>
  <main class="container mx-auto mt-8 grid flex-grow grid-cols-1 gap-6 px-6 md:grid-cols-3">
    <section class="rounded-lg bg-white p-6 shadow-md">
      <div class="mb-6 flex flex-col items-center">
        <div class="mb-4 h-16 w-16 rounded-full bg-gray-300">
          <img :src="user.image" class="w-full" />
        </div>
        <div>
          <p class="text-sm font-semibold text-gray-600">Email:</p>
          <p class="mb-4 font-medium text-gray-900">{{ user.email }}</p>
          <p class="text-sm font-semibold text-gray-600">Subscription Plan:</p>
          <router-link to="/subscription" class="text-blue-600 underline">
            {{ user.subscriptionPlan }}
          </router-link>
        </div>
      </div>
      <div class="rounded-md border">
        <button
          v-for="option in options"
          :key="option"
          class="w-full px-6 py-3 text-left font-medium text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
          @click="showDetails(option)"
        >
          {{ option }}
        </button>
      </div>
    </section>

    <section class="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <p class="text-gray-500 italic">{{ modalMessage }}</p>
    </section>

    <NewsSection />
  </main>
</template>
