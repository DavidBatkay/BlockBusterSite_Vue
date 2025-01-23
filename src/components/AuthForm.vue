<template>
  <div>
    <!-- Form to handle either signup or login -->
    <form @submit.prevent="handleSubmit">
      <!-- Email field -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
          class="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <!-- Password field -->
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
          class="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <!-- Confirm Password field for signup -->
      <div v-if="isSignup" class="mb-4">
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          v-model="confirmPassword"
          required
          class="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Confirm your password"
        />
      </div>

      <!-- Forgot password link for login -->
      <div v-if="!isSignup" class="flex justify-start mb-6">
        <a href="" class="text-sm text-blue-600 hover:underline"
          >Forgot your password?</a
        >
      </div>

      <!-- Submit button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="w-24 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
        >
          {{ isSignup ? "Sign Up" : "Log In" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isSignup: {
      required: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.isSignup) {
        // Signup logic
        if (this.password === this.confirmPassword) {
          localStorage.setItem("userLoggedIn", "true"); // Simulate sign-up success
          this.$router.push("/myaccount"); // Redirect to home page
        }
      } else {
        // Login logic
        if (this.email && this.password) {
          localStorage.setItem("userLoggedIn", "true"); // Simulate login success
          this.$router.push("/myaccount"); // Redirect to home page
        }
      }
    },
  },
};
</script>
