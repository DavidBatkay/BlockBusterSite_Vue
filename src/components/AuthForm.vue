<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <div v-if="isSignup" class="mb-4">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          required
          class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Confirm your password"
        />
      </div>

      <div v-if="!isSignup" class="mb-6 flex justify-start">
        <a href="" class="text-sm text-blue-600 hover:underline"> Forgot your password? </a>
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="w-24 rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
        >
          {{ isSignup ? "Sign Up" : "Log In" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useBlockbusterStore } from "../stores/useBlockbusterStore"
const props = defineProps({
  isSignup: Boolean
})
const store = useBlockbusterStore()
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const router = useRouter()

const handleSubmit = () => {
  if (props.isSignup) {
    if (password.value === confirmPassword.value) {
      store.logIn()
      router.push("/myaccount")
    }
  } else {
    if (email.value && password.value) {
      store.logIn()
      router.push("/myaccount")
    }
  }
}
</script>
