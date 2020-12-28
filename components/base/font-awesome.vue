<template>
  <div class="fontawesome" v-html="unicode" />
</template>

<script>
export default {
  name: "font-awesome",
  props: {
    unicode: {
      type: String,
      request: true,
    },
  },
};
</script>

<style lang="sass">
.fontawesome
  font-family: "font-awesome", serif
  +d-display(inline-block)
</style>
