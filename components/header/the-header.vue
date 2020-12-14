<template>
  <header>
    <the-header-top />
  </header>
</template>

<script lang="ts">
import TheHeaderTop from "~/components/header/the-header-top/the-header-top.vue";
export default {
  name: "the-header",
  components: { TheHeaderTop },
};
</script>
<style lang="sass">
@import "assets/sass/header/header.sass"
</style>
