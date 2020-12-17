<template>
  <header>
    <the-header-top />
    <the-header-main />
    <the-bottom />
  </header>
</template>

<script lang="ts">
import TheHeaderTop from "~/components/header/the-header-top/the-header-top.vue";
import TheHeaderMain from "~/components/header/the-header-main/the-header-main.vue";
import TheBottom from "~/components/header/the-bottom/the-bottom.vue";
export default {
  name: "the-header",
  components: { TheBottom, TheHeaderMain, TheHeaderTop },
};
</script>
<style lang="sass">
@import "assets/sass/header/header-main"
@import "assets/sass/header/header-top"
@import "assets/sass/header/header-bottom"
@import "assets/sass/header/header-dropdown"
</style>
