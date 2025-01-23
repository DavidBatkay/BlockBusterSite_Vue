<script>
import NewsSection from "../components/NewsSection.vue";
import userData from "../data/userData";
export default {
  data() {
    return {
      user: {
        email: userData.email,
        image: userData.image,
        subscriptionPlan:
          localStorage.getItem("subscriptionPlan") || "Free Plan",
      },
      options: ["Billing Information", "Parental Controls", "Account Settings"],
      modalMessage: "Select an option to view details.",
    };
  },
  components: {
    NewsSection,
  },
  methods: {
    showDetails(option) {
      this.modalMessage = `Details about ${option} will go here.`;
    },
  },
  watch: {
    user: {
      handler() {
        this.user.subscriptionPlan =
          localStorage.getItem("subscriptionPlan") || "Free Plan";
      },
      deep: true,
    },
  },
  mounted() {
    window.addEventListener("storage", () => {
      this.user.subscriptionPlan =
        localStorage.getItem("subscriptionPlan") || "Free Plan";
    });
  },
};
</script>

<template>
  <main
    class="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow"
  >
    <!-- Profile Section -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col items-center mb-6">
        <div class="w-16 h-16 bg-gray-300 rounded-full mb-4">
          <img :src="user.image" class="w-full" />
        </div>
        <div>
          <p class="text-gray-600 text-sm font-semibold">Email:</p>
          <p class="text-gray-900 font-medium mb-4">{{ user.email }}</p>
          <p class="text-gray-600 text-sm font-semibold">Subscription Plan:</p>
          <router-link to="/subscription" class="text-blue-600 underline">
            {{ user.subscriptionPlan }}
          </router-link>
        </div>
      </div>
      <div class="border rounded-md divide-y">
        <button
          v-for="option in options"
          :key="option"
          class="w-full px-4 py-2 text-left hover:bg-gray-100"
          @click="showDetails(option)"
        >
          {{ option }}
        </button>
      </div>
    </section>

    <!-- Modal Display Section -->
    <section
      class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
    >
      <p class="text-gray-500 italic">{{ modalMessage }}</p>
    </section>

    <NewsSection />
  </main>
</template>
