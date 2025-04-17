<script>
import LoremIpsum from "../components/LoremIpsum.vue"
export default {
  components: {
    LoremIpsum
  }
}
</script>
<template>
  <main class="container mx-auto mt-8 px-6">
    <section class="container mx-auto space-y-12 px-4 py-8 md:px-8 lg:px-16">
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div
          class="flex aspect-[4/3] items-center justify-center rounded bg-gray-200 max-sm:object-contain"
        >
          <img
            class="h-full w-full object-cover"
            src="https://i.dailymail.co.uk/i/newpix/2018/03/23/20/4A7D9E3000000578-5536827-image-a-50_1521837731645.jpg"
            alt=""
          />
        </div>
        <div>
          <LoremIpsum
            text="Blockbuster began in 1985 as a video rental store in Dallas, quickly expanding thanks to its wide movie selection and bright, clean stores. By the 1990s, it had become a global giant with thousands of locations, dominating home entertainment. In 2000, it famously declined a chance to buy Netflix for $50 million, underestimating the rise of digital streaming. As online platforms grew and late fees turned customers away, Blockbuster struggled to adapt. Despite a brief push into streaming and a partnership with Enron, its debt and slow innovation led to bankruptcy in 2010. Most stores closed, and today, only one remains as a nostalgic landmark in Bend, Oregon."
            title="Our Blockbuster Story"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div
          class="order-first flex aspect-[4/3] items-center justify-center rounded bg-gray-200 max-sm:object-contain md:order-last"
        >
          <img
            class="h-full w-full object-cover"
            src="https://m.media-amazon.com/images/M/MV5BYzI2ZTAxOGQtNDYzZS00OWQ1LTg4MmEtODI3MGJhODMyM2RiXkEyXkFqcGc@._V1_.jpg"
            alt=""
          />
        </div>
        <div>
          <LoremIpsum
            text="Blockbuster has returned, reimagined for the digital age. Rising from nostalgic roots, it now offers a bold streaming platform focused on curated classics, rentals replaced with subscriptions, and a fresh take on digital ownership. With a sleek interface and community-driven features, it appeals to both long-time fans and a new generation tired of endless scrolling. Partnering with indie studios and reviving the magic of movie nights, Blockbuster aims to blend old-school charm with modern convenience. No longer a relic, it positions itself as a real contender against streaming giants, ready to redefine home entertainment—again."
            title="What now?"
          />
        </div>
      </div>
    </section>
  </main>
</template>
