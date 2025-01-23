<script>
import AuthForm from "../components/AuthForm.vue";

export default {
  components: {
    AuthForm,
  },
  methods: {
    handleAuthSuccess() {
      // Handle successful authentication here
      console.log("Sign-up successful! Header will update.");
      // You can update global state or use a Vuex store to reflect the logged-in status
    },
  },
};
</script>

<template>
  <main class="container mx-auto flex-grow px-6 content-center">
    <section class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md">
      <div>
        <!-- Use the shared AuthForm component and pass isSignup prop as true -->
        <AuthForm :isSignup="true" @auth-success="handleAuthSuccess" />
      </div>
    </section>
  </main>
</template>
