<script setup>
import { computed, onMounted } from "vue"
import NewsSection from "../components/NewsSection.vue"
import { useUserStore } from "../stores/useUserStore.js"
import { ref } from "vue"
import profileUrl from "../assets/profile3.png"
import { useRouter } from "vue-router"
import { useBlockbusterStore } from "../stores/useBlockbusterStore.js"
const store = useUserStore()
const blockBusterStore = useBlockbusterStore()

const user = computed(() => store.user)
const router = useRouter()
const options = ["Billing Information", "Parental Controls", "Account Settings"]
const modalMessage = ref("Select an option to view details.")
const password = ref("")
const isEditingCard = ref("")
const activeSection = ref("") // will hold the current section
const isSectionActive = section => activeSection.value === section

onMounted(async () => {
  if (store.user.email === "") {
    router.push("/")
  } else {
    await store.fetchCards()
  }
})
const showAddForm = ref(false)
const editingCard = ref(null)
const form = ref({
  number: "",
  name: "",
  expiration: "",
  cvc: ""
})

const resetForm = () => {
  isEditingCard.value = false
  form.value = { number: "", name: "", expiration: "", cvc: "" }
  editingCard.value = null
  showAddForm.value = false
}

const editCard = card => {
  isEditingCard.value = true
  editingCard.value = card.number
  form.value = { ...card }
  showAddForm.value = true
}

const handleSubmitCard = async () => {
  if (editingCard.value) {
    await store.updateCard(editingCard.value, form.value)
  } else {
    await store.addCard(form.value)
  }
  await store.fetchCards()
  isEditingCard.value = false
  resetForm()
}

const handleDeleteCard = async number => {
  try {
    await store.deleteCard(number)
    store.updateSubscription("Free Plan")
    localStorage.setItem("subscriptionPlan", "Free Plan")
    await store.fetchCards()
  } catch (err) {
    console.error("Failed to delete card:", err)
  }
}

function showDetails(option) {
  modalMessage.value = `${option}:`
}

const handleClick = option => {
  activeSection.value = option
  showDetails(option)
}

const handleToggleParental = () => {
  store.toggleKidsAccount()
  blockBusterStore.isKidsAccount = !blockBusterStore.isKidsAccount
}

const handleDelete = async password => {
  modalMessage.value = `Deleting account...`
  activeSection.value = ""
  try {
    setTimeout(() => {
      store.deleteUser(password)
      blockBusterStore.isKidsAccount = false
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
    showDetails(activeSection.value)
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
          @click="handleClick(option)"
        >
          {{ option }}
        </button>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <p class="text-gray-500 italic">{{ modalMessage }}</p>

      <div
        v-if="isSectionActive(`Account Settings`)"
        class="mt-4 flex w-full flex-col items-center gap-3"
      >
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
          placeholder="Enter password to delete account"
          class="w-full max-w-xs rounded border border-gray-300 px-4 py-2 focus:border-red-500 focus:outline-none"
        />

        <button
          @click="handleDelete(password)"
          class="w-full max-w-xs rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
        >
          Delete
        </button>
      </div>
      <div
        v-if="isSectionActive(`Parental Controls`)"
        class="mt-4 flex w-full flex-col items-center gap-3"
      >
        <div class="flex flex-row">
          <p class="rounded px-4 py-2 text-black">Kids Mode:</p>
          <button
            @click="handleToggleParental"
            class="rounded px-4 py-2 text-white"
            :class="
              store.user.isKidsAccount
                ? `bg-green-500 hover:bg-green-600`
                : `bg-red-500 hover:bg-red-600`
            "
          >
            {{ store.user.isKidsAccount ? "ON" : "OFF" }}
          </button>
        </div>
      </div>
      <div
        v-if="isSectionActive(`Billing Information`)"
        class="mt-4 flex w-full flex-col items-center gap-4"
      >
        <div
          v-if="!isEditingCard"
          v-for="(card, index) in store.user.cards"
          :key="index"
          class="w-full max-w-md rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white shadow-lg"
        >
          <div v-if="!editingCard || editingCard.number !== card.number">
            <div class="relative">
              <div class="mb-4 h-10 w-12 rounded bg-yellow-600"></div>
              <p class="text-lg tracking-wider">
                {{ card.number.replace(/(\d{4})(?=\d)/g, "$1 ") }}
              </p>
              <div class="mt-4 flex justify-between">
                <div>
                  <p class="text-sm">Cardholder</p>
                  <p class="font-semibold">{{ card.name }}</p>
                </div>
                <div>
                  <p class="text-sm">Expires</p>
                  <p class="font-semibold">{{ card.expiration }}</p>
                </div>
                <div>
                  <p class="text-sm">CVC</p>
                  <p class="font-semibold">{{ card.cvc }}</p>
                </div>
              </div>
              <div class="absolute top-0 right-0 h-8 w-12 rounded bg-gray-400 opacity-50"></div>
            </div>
            <div class="mt-4 flex justify-end gap-2">
              <button @click="editCard(card)" class="text-blue-300 underline hover:text-blue-100">
                Edit
              </button>
              <button
                @click="handleDeleteCard(card.number)"
                class="text-red-300 underline hover:text-red-100"
              >
                Delete
              </button>
            </div>
          </div>
          <form v-else @submit.prevent="handleSubmitCard" class="flex flex-col gap-3">
            <input
              v-model="form.number"
              type="text"
              placeholder="Card Number"
              class="rounded border border-gray-600 bg-gray-700 px-4 py-2 text-lg tracking-wider text-white placeholder-gray-400"
              required
            />
            <div class="mt-4 flex justify-between gap-2">
              <div class="flex-1">
                <p class="text-sm">Cardholder</p>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Cardholder Name"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div class="flex-1">
                <p class="text-sm">Expires</p>
                <input
                  v-model="form.expiration"
                  type="text"
                  placeholder="Expiration (MM/YY)"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div class="flex-1">
                <p class="text-sm">CVC</p>
                <input
                  v-model="form.cvc"
                  type="text"
                  placeholder="CVC"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div class="absolute top-6 right-6 h-8 w-12 rounded bg-gray-400 opacity-50"></div>
            <div class="mt-4 flex justify-between">
              <button
                type="submit"
                class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                @click="resetForm"
                type="button"
                class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <button
          @click="showAddForm = true"
          class="mt-4 w-full max-w-md rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          v-if="!showAddForm"
        >
          Add Card
        </button>

        <div
          v-if="showAddForm"
          class="w-full max-w-md rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white shadow-lg"
        >
          <form @submit.prevent="handleSubmitCard" class="flex flex-col gap-3">
            <div class="mb-4 h-10 w-12 rounded bg-yellow-600"></div>
            <input
              v-model="form.number"
              type="text"
              placeholder="Card Number"
              class="rounded border border-gray-600 bg-gray-700 px-4 py-2 text-lg tracking-wider text-white placeholder-gray-400"
              required
            />
            <div class="mt-4 flex justify-between gap-2">
              <div class="flex-1">
                <p class="text-sm">Cardholder</p>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Cardholder Name"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div class="flex-1">
                <p class="text-sm">Expires</p>
                <input
                  v-model="form.expiration"
                  type="text"
                  placeholder="Expiration (MM/YY)"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div class="flex-1">
                <p class="text-sm">CVC</p>
                <input
                  v-model="form.cvc"
                  type="text"
                  placeholder="CVC"
                  class="w-full rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div class="absolute top-6 right-6 h-8 w-12 rounded bg-gray-400 opacity-50"></div>
            <div class="mt-4 flex justify-between">
              <button
                type="submit"
                class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Add Card
              </button>
              <button
                @click="resetForm"
                type="button"
                class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <NewsSection />
  </main>
</template>
