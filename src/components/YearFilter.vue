<template>
  <!-- Tab Select -->
  <div
    class="border-[3px] bg-gradient-to-t xl:font-bold from-blue-700 to-blue-400 text-yellow-300 border-yellow-300 bg-blue-600 rounded-md max-w-md mx-auto p-4"
  >
    <div class="flex justify-around">
      <button
        :class="[activeTab === '10 Years' ? activeClass : inactiveClass]"
        @click="setActiveTab('10 Years')"
      >
        10 Years
      </button>
      <button
        :class="[activeTab === '20 Years' ? activeClass : inactiveClass]"
        @click="setActiveTab('20 Years')"
      >
        20 Years
      </button>
      <button
        :class="[activeTab === '30+ Years' ? activeClass : inactiveClass]"
        @click="setActiveTab('30+ Years')"
      >
        30+ Years
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "10 Years",
      activeClass:
        "px-4 py-2 bg-inherit text-white rounded-md hover:bg-blue-950 hover:text-yellow-300  bg-blue-950 text-yellow-300 ring-4 ring-blue-300",
      inactiveClass:
        "px-4 py-2 bg-inherit text-white rounded-md hover:bg-blue-950 hover:text-yellow-300 ",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
