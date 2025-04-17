<script setup>
import { computed, onMounted } from "vue"
import NewsSection from "../components/NewsSection.vue"
import { useUserStore } from "../stores/useUserStore.js"
import { ref } from "vue"
import profileUrl from "../assets/profile3.png"
import { useRouter } from "vue-router"
const store = useUserStore()

const user = computed(() => store.user)
const router = useRouter()
onMounted(() => {
  store.user.email === "" && router.push("/")
})
const options = ["Billing Information", "Parental Controls", "Account Settings"]
const modalMessage = ref("Select an option to view details.")
const accountSettings = ref(false)
const password = ref("")
function showDetails(option) {
  if (option === "Account Settings") {
    accountSettings.value = true
  } else {
    accountSettings.value = false
  }
  modalMessage.value = `${option}:`
}

const handleDelete = async password => {
  modalMessage.value = `Deleting account...`
  accountSettings.value = false
  try {
    setTimeout(() => {
      store.deleteUser(password)
      router.push("/")
    }, 1000)
  } catch (err) {
    console.error("Failed to delete user:", err)
  }
}
const newImageUrl = ref("")
const handleUpdatePicture = async () => {
  modalMessage.value = "Updating account picture..."

  try {
    await store.updateUserPicture(newImageUrl.value)
  } catch (error) {
    modalMessage.value = "Update failed. Please try again."
    console.error(error)
  }
  setTimeout(() => {
    newImageUrl.value = ""
    modalMessage.value = ""
  }, 1000)
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

    <section class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <p class="text-gray-500 italic">{{ modalMessage }}</p>

      <div v-if="accountSettings" class="mt-4 flex w-full flex-col items-center gap-3">
        <input
          v-model="newImageUrl"
          type="text"
          placeholder="New image URL"
          class="w-full max-w-xs rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <button
          @click="handleUpdatePicture(newImageUrl)"
          class="w-full max-w-xs rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Update Picture
        </button>
        <input
          v-model="password"
          type="password"
          placeholder="Confirm password"
          class="w-full max-w-xs rounded border border-gray-300 px-4 py-2 focus:border-red-500 focus:outline-none"
        />

        <button
          @click="handleDelete(password)"
          class="w-full max-w-xs rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </section>

    <NewsSection />
  </main>
</template>
