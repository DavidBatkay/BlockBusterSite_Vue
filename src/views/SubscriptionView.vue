<script setup>
import { ref, watchEffect } from "vue"
import { useUserStore } from "../stores/useUserStore.js"
import plansData from "../data/plansData.js"

const store = useUserStore()
const plans = ref(plansData)
const selectedPlan = ref(store.user.subscriptionPlan || "Free Plan")
const error = ref("")

const selectPlan = planName => {
  if (store.isLoggedIn && store.user.cards.length > 0) {
    selectedPlan.value = planName
    store.updateSubscription(planName)
    localStorage.setItem("subscriptionPlan", planName)
    error.value = ""
  }
}
if (!store.isLoggedIn) error.value = "Log in to select plan"

const isSelected = planName => {
  return selectedPlan.value === planName && store.isLoggedIn
}

watchEffect(() => {
  if (store.isLoggedIn) {
    selectedPlan.value = store.user.subscriptionPlan || "Free Plan"
    if (store.user.cards.length < 1) error.value = "Add card to select plan"
  }
})
</script>

<template>
  <main class="container mx-auto my-8 flex-grow px-6">
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-gray-800">Subscription Plans</h1>
      <p class="mt-2 text-lg text-gray-600">Choose the best plan for your entertainment needs!</p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="flex transform flex-col justify-between rounded-lg border p-6 shadow-md transition-transform hover:shadow-lg"
        :class="plan.classes"
      >
        <h2 class="mb-2 text-3xl font-bold" :class="plan.textColor">
          {{ plan.name }}
        </h2>
        <p class="mb-6 text-gray-700">
          <span class="text-xl underline">{{ plan.price }}</span
          ><br /><br />
          <span v-for="(feature, i) in plan.features" :key="i"> - {{ feature }}<br /> </span>
        </p>
        <span v-if="plan.note" class="text-xs text-gray-500">
          {{ plan.note }}
        </span>
        <button
          class="w-full rounded-md px-4 py-2 font-bold"
          :class="{
            [plan.buttonDisabled]: isSelected(plan.name),
            [plan.buttonEnabled]: !isSelected(plan.name)
          }"
          :disabled="isSelected(plan.name)"
          @click="selectPlan(plan.name)"
        >
          {{
            isSelected(plan.name) && store.isLoggedIn
              ? "Current Plan"
              : error
                ? error
                : "Select This Plan"
          }}
        </button>
      </div>
    </div>
  </main>
</template>
