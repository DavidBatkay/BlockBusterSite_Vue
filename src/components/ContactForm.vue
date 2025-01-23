<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">
      Still having questions? Contact us!
    </h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          v-model="form.firstName"
          type="text"
          placeholder="First Name"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          v-model="form.lastName"
          type="text"
          placeholder="Last Name"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />

      <select
        v-model="form.issueCategory"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Select Issue Category</option>
        <option value="subscription">Subscription</option>
        <option value="technical">Technical Support</option>
        <option value="billing">Billing</option>
        <option value="content">Content Availability</option>
        <option value="other">Other</option>
      </select>

      <textarea
        v-model="form.issueDescription"
        placeholder="Describe your issue..."
        rows="4"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["formSubmitted"]);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  issueCategory: "",
  issueDescription: "",
});

const submitForm = () => {
  alert("Form submitted!");
  emit("formSubmitted", form.value); // Emit event to parent if needed
};
</script>
