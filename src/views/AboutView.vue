<script>
import LoremIpsum from "../components/LoremIpsum.vue";
export default {
  components: {
    LoremIpsum,
  },
};
</script>
<template>
  <main class="container mx-auto mt-8 px-6">
    <section class="container mx-auto px-4 md:px-8 lg:px-16 py-8 space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div
          class="bg-gray-200 max-sm:object-contain flex aspect-[4/3] items-center justify-center rounded"
        ></div>
        <div>
          <LoremIpsum title="Our Blockbuster Story" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div
          class="bg-gray-200 max-sm:object-contain flex aspect-[4/3] items-center justify-center rounded order-first md:order-last"
        ></div>
        <div>
          <LoremIpsum title="What now?" />
        </div>
      </div>
    </section>
  </main>
</template>
