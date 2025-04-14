<script setup>
defineProps({
  title: {
    required: false
  },
  text: {
    required: false
  }
})
</script>
<template>
  <h2 class="mb-4 text-lg font-bold md:text-xl">{{ title }}</h2>
  <p v-if="!text" class="text-xs text-gray-700 sm:text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis efficitur enim. Aenean lacinia
    risus scelerisque eros convallis euismod. Suspendisse vitae scelerisque ipsum. Aliquam pulvinar,
    nunc a auctor sagittis, lorem sem semper orci, sodales pulvinar libero massa vel enim. Proin
    rutrum lectus eget rhoncus tempus. Fusce sed urna vel felis tempor porttitor. Donec ac dignissim
    lectus. Donec feugiat fermentum erat sit amet efficitur. Etiam venenatis sapien vitae velit
    auctor gravida. Nunc nec condimentum elit. Interdum et malesuada fames ac ante ipsum primis in
    faucibus. Ut vel quam felis. Quisque ac felis metus. Phasellus ac massa ut lorem tincidunt
    mattis vel tincidunt justo. Proin tempus, eros at pharetra cursus, justo massa tincidunt diam,
    sit amet malesuada velit eros at sem. Praesent non ipsum tortor. Curabitur quis augue et libero
    volutpat vehicula vel in ex. Mauris sed lectus at nulla finibus aliquam. Integer nisl quam,
    pretium aliquam ex id, cursus suscipit magna. Sed malesuada neque dignissim, hendrerit turpis
    blandit, commodo augue.
  </p>
  <p v-else class="text-xs text-gray-700 sm:text-sm">{{ text }}</p>
</template>
