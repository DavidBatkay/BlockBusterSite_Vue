<script>
import AuthForm from "../components/AuthForm.vue";

export default {
  components: {
    AuthForm,
  },
  methods: {
    handleAuthSuccess() {
      console.log("Sign-up successful! Header will update.");
    },
  },
};
</script>

<template>
  <main class="container mx-auto flex-grow px-6 content-center">
    <section class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md">
      <div>
        <AuthForm :isSignup="true" @auth-success="handleAuthSuccess" />
      </div>
    </section>
  </main>
</template>
