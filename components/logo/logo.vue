<template>
  <nuxt-link class="logo" to="/">
    <img :src="require('@/assets/img/logo.png')" alt="" />
  </nuxt-link>
</template>

<script>
export default {
  name: "logo",
};
</script>

<style lang="sass">
@import "assets/sass/logo/logo"
</style>
