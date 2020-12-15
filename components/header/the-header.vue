<template>
  <header>
    <the-header-top />
    <the-header-main />
  </header>
</template>

<script lang="ts">
import TheHeaderTop from "~/components/header/the-header-top/the-header-top.vue";
import TheHeaderMain from "~/components/header/the-header-main/the-header-main.vue";
export default {
  name: "the-header",
  components: { TheHeaderMain, TheHeaderTop },
};
</script>
<style lang="sass">
@import "assets/sass/header/header-main"
@import "assets/sass/header/header-top"
</style>
