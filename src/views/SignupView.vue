<script setup>
import AuthForm from "../components/AuthForm.vue";
</script>

<template>
  <main class="container mx-auto flex-grow px-6 content-center">
    <section class="mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md">
      <div>
        <AuthForm :isSignup="true" />
      </div>
    </section>
  </main>
</template>
