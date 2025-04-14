<template>
  <main class="container mx-auto mt-8 px-6">
    <section class="container mx-auto px-6 my-8">
      <FAQSection :faqs="faqs" />
      <ContactForm @formSubmitted="handleFormSubmit" />
    </section>
  </main>
</template>

<script setup>
import FAQSection from "../components/FAQSection.vue";
import ContactForm from "../components/ContactForm.vue";
import faqs from "../data/faqData.js";

const handleFormSubmit = (formData) => {
  console.log("Form Submitted:", formData);
};
</script>
