<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <body class="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
    <Header />
    <RouterView />
    <Footer />
  </body>
</template>
