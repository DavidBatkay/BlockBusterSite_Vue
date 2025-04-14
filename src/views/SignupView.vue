<script setup>
import AuthForm from "../components/AuthForm.vue"
</script>

<template>
  <main class="container mx-auto flex-grow content-center px-6">
    <section class="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-md">
      <div>
        <AuthForm :isSignup="true" />
      </div>
    </section>
  </main>
</template>
