<script>
export default {
  props: {
    title: {
      required: false,
    },
  },
};
</script>
<template>
  <h2 class="text-lg md:text-xl font-bold mb-4">{{ title }}</h2>
  <p class="text-gray-700 text-xs sm:text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis efficitur
    enim. Aenean lacinia risus scelerisque eros convallis euismod. Suspendisse
    vitae scelerisque ipsum. Aliquam pulvinar, nunc a auctor sagittis, lorem sem
    semper orci, sodales pulvinar libero massa vel enim. Proin rutrum lectus
    eget rhoncus tempus. Fusce sed urna vel felis tempor porttitor. Donec ac
    dignissim lectus. Donec feugiat fermentum erat sit amet efficitur. Etiam
    venenatis sapien vitae velit auctor gravida. Nunc nec condimentum elit.
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel quam
    felis. Quisque ac felis metus. Phasellus ac massa ut lorem tincidunt mattis
    vel tincidunt justo. Proin tempus, eros at pharetra cursus, justo massa
    tincidunt diam, sit amet malesuada velit eros at sem. Praesent non ipsum
    tortor. Curabitur quis augue et libero volutpat vehicula vel in ex. Mauris
    sed lectus at nulla finibus aliquam. Integer nisl quam, pretium aliquam ex
    id, cursus suscipit magna. Sed malesuada neque dignissim, hendrerit turpis
    blandit, commodo augue.
  </p>
</template>
