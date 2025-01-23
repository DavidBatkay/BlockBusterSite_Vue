<template>
  <div class="flex space-x-4 justify-center lg:justify-start">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      @click="setActive(index)"
      :class="index === activeIndex ? activeClass : inactiveClass"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: ["Trending", "New Releases", "Coming Soon"],
      activeIndex: 0, // First button is active by default
      activeClass:
        "px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600",
      inactiveClass: "px-4 py-2 text-gray-600 hover:text-blue-600",
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index; // Update the active button
    },
  },
};
</script>
