<script setup>
import { ref } from "vue"

const tabs = ["10 Years", "20 Years", "30+ Years"]
const activeTab = ref("10 Years")

const setActiveTab = tab => {
  activeTab.value = tab
}

const activeClass = "bg-blue-950 text-yellow-300 ring-4 ring-blue-300 px-4 py-2 rounded-md"
const inactiveClass =
  "bg-inherit text-white px-4 py-2 rounded-md hover:bg-blue-950 hover:text-yellow-300"
</script>

<template>
  <div
    class="mx-auto max-w-md rounded-md border-[3px] border-yellow-300 bg-blue-600 bg-gradient-to-t from-blue-700 to-blue-400 p-4 text-yellow-300 xl:font-bold"
  >
    <div class="flex justify-around">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[activeTab === tab ? activeClass : inactiveClass]"
        @click="setActiveTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>
