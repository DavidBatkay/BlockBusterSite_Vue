<template>
  <div>
    <h2 class="mb-4 text-2xl font-bold text-gray-800">Still having questions? Contact us!</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          v-model="form.firstName"
          type="text"
          placeholder="First Name"
          required
          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          v-model="form.lastName"
          type="text"
          placeholder="Last Name"
          required
          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
      />

      <select
        v-model="form.issueCategory"
        required
        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="" disabled selected>Select Issue Category</option>
        <option value="subscription">Subscription</option>
        <option value="technical">Technical Support</option>
        <option value="billing">Billing</option>
        <option value="content">Content Availability</option>
        <option value="other">Other</option>
      </select>

      <textarea
        v-model="form.message"
        placeholder="Describe your issue..."
        rows="4"
        required
        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        class="w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useContactStore } from "../stores/useContactStore"
const emit = defineEmits(["formSubmitted"])
const store = useContactStore()

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  issueCategory: "",
  message: ""
})

const submitForm = async () => {
  try {
    await store.sendForm(form.value)
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      issueCategory: "",
      message: ""
    }
    alert("Form submitted!")
  } catch (error) {
    console.error("Error submitting form:", error)
  }
}
</script>
