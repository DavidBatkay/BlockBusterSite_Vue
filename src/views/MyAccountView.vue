<script setup>
import { computed } from "vue"
import NewsSection from "../components/NewsSection.vue"
import { useUserStore } from "../stores/useUserStore.js"
import { ref } from "vue"
import profileUrl from "../assets/profile3.png"
const store = useUserStore()

const user = computed(() => store.user)

const options = ["Billing Information", "Parental Controls", "Account Settings"]
const modalMessage = ref("Select an option to view details.")

function showDetails(option) {
  modalMessage.value = `Details about ${option} will go here.`
}
</script>

<template>
  <main class="container mx-auto mt-8 grid flex-grow grid-cols-1 gap-6 px-6 md:grid-cols-3">
    <section class="rounded-lg bg-white p-6 shadow-md">
      <div class="mb-6 flex flex-col items-center">
        <div class="mb-4 h-16 w-16 overflow-hidden rounded-full bg-gray-300">
          <img :src="user.image || profileUrl" class="w-full" />
        </div>
        <div>
          <p class="text-sm font-semibold text-gray-600">Email:</p>
          <p class="mb-4 font-medium text-gray-900">{{ user.email }}</p>
          <p class="text-sm font-semibold text-gray-600">Subscription Plan:</p>
          <router-link to="/subscription" class="text-blue-600 underline">
            {{ user.subscriptionPlan || "Free Plan" }}
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
