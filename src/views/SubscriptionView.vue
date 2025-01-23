<template>
  <main class="container mx-auto my-8 px-6 flex-grow">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Subscription Plans</h1>
      <p class="text-lg text-gray-600 mt-2">
        Choose the best plan for your entertainment needs!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="border rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transform hover:shadow-lg"
        :class="plan.classes"
      >
        <h2 class="text-3xl font-bold mb-2" :class="plan.textColor">
          {{ plan.name }}
        </h2>
        <p class="text-gray-700 mb-6">
          <span class="underline text-xl">{{ plan.price }}</span
          ><br /><br />
          <span v-for="(feature, i) in plan.features" :key="i">
            - {{ feature }}<br />
          </span>
        </p>
        <span v-if="plan.note" class="text-xs text-gray-500">
          {{ plan.note }}
        </span>
        <button
          class="w-full font-bold py-2 px-4 rounded-md"
          :class="{
            [plan.buttonDisabled]: isSelected(plan.name),
            [plan.buttonEnabled]: !isSelected(plan.name),
          }"
          :disabled="isSelected(plan.name)"
          @click="selectPlan(plan.name)"
        >
          {{ isSelected(plan.name) ? "Current Plan" : "Select This Plan" }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const selectedPlan = ref(
  localStorage.getItem("subscriptionPlan") || "Free Plan"
);

const selectPlan = (planName) => {
  selectedPlan.value = planName;
  localStorage.setItem("subscriptionPlan", planName);
};

const isSelected = (planName) => selectedPlan.value === planName;
import plansData from "../data/plansData";
const plans = ref(plansData);
</script>
