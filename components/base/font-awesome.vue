<template>
  <div class="fontawesome">{{ unicode }}</div>
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
  font-family: "FontAwesome", serif
  +d-display(inline-block)
@font-face
  font-family: 'FontAwesome'
  src: url('~assets/fonts/font-awesome/fontawesome-webfont.eot')
  src: url('~assets/fonts/font-awesome/fontawesome-webfont.eot') format('embedded-opentype')
  src:  url('~assets/fonts/font-awesome/fontawesome-webfont.woff2') format('woff2')
  src: url('~assets/fonts/font-awesome/fontawesome-webfont.woff') format('woff')
  src: url('~assets/fonts/font-awesome/fontawesome-webfont.ttf') format('truetype')
  src: url('~assets/fonts/font-awesome/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg')
  font-weight: normal
  font-style: normal
</style>
