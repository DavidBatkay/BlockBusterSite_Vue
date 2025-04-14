<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <body class="flex min-h-screen flex-col bg-gray-100 text-gray-900">
    <Header />
    <RouterView />
    <Footer />
  </body>
</template>

<style>
@import "tailwindcss";
</style>
