<template>
  <container>
    <div class="wrapper-header-main">
      <logo />
      <the-header-button-search />
      <the-header-users />
    </div>
  </container>
</template>

<script lang="ts">
import Container from "~/components/base/container.vue";
import Logo from "~/components/logo/logo.vue";
import TheHeaderButtonSearch from "~/components/header/the-header-main/the-header-button_search.vue";
import TheHeaderUsers from "~/components/header/the-header-main/the-header-users.vue";
export default {
  name: "the-header-main",
  components: { TheHeaderUsers, TheHeaderButtonSearch, Logo, Container },
};
</script>

<!--<style lang="sass"></style>-->
